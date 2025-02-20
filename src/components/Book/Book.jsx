import { useContext, useEffect, useMemo, useRef, useState } from "react"
import { pages } from "./BookUi"
import { Bone, BoxGeometry, Color, Float32BufferAttribute, MathUtils, MeshStandardMaterial, Skeleton, SkeletonHelper, SkinnedMesh, SRGBColorSpace, Uint16BufferAttribute, Vector3 } from "three"
import { Html, useCursor, useHelper, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { degToRad } from "three/src/math/MathUtils"
import bookCoverRouhness from "@/assets/img/bonus/book-cover-roughness.jpg"
import { BookPageContext } from "@/hooks/contextProvider"
import * as easing from "maath/easing"

const easingFactor = 0.5 // control the speed of easing
const easingFactorFold = 0.3
const insideCurvStrength = 0.18 // control the strength of the curve
const outsideCurvStrength = 0.05
const turningCurvStrength = 0.09
const PAGE_WIDTH = 1.28
const PAGE_HEIGHT = 1.71
const PAGE_DEPTH = 0.003
const PAGE_SEGMENTS = 30
const SEGMENT_WIDTH = PAGE_WIDTH / PAGE_SEGMENTS

const pageGeometry = new BoxGeometry(
    PAGE_WIDTH,
    PAGE_HEIGHT,
    PAGE_DEPTH,
    PAGE_SEGMENTS,
    2
)
pageGeometry.translate(PAGE_WIDTH / 2, 0, 0)

const position = pageGeometry.attributes.position
const vertex = new Vector3()
const skinIndexes = []
const skinWeights = []

for (let i = 0; i < position.count; i++) {
    vertex.fromBufferAttribute(position, i) // get the vertex

    const x = vertex.x // get the x position of the vertex
    const skinIndex = Math.max(0, Math.floor(x / SEGMENT_WIDTH))
    let skinWeight = (x % SEGMENT_WIDTH / SEGMENT_WIDTH)

    skinIndexes.push(skinIndex, skinIndex + 1, 0, 0)
    skinWeights.push(1 - skinWeight, skinWeight, 0, 0)
}

pageGeometry.setAttribute(
    "skinIndex", new Uint16BufferAttribute(skinIndexes, 4)
)
pageGeometry.setAttribute(
    "skinWeight", new Float32BufferAttribute(skinWeights, 4)
)

const whiteColor = new Color("white")

const pageMaterials = [
    new MeshStandardMaterial({
        color: whiteColor,
    }),
    new MeshStandardMaterial({
        color: "#111",
    }),
    new MeshStandardMaterial({
        color: whiteColor,
    }),
    new MeshStandardMaterial({
        color: whiteColor,
    }),
]

pages.forEach((page) => {
    useTexture.preload(page.front.src)
    useTexture.preload(page.back.src)
    useTexture.preload(bookCoverRouhness.src)
})

const Page = ({number, front, back, page, opened, bookClosed, turnPage, ...props}) => {

    const groupRef = useRef()
    const turnedAt = useRef(0)
    const lastOpened = useRef(opened)
    const skinnedMeshRef = useRef()
    const [highlighted, setHighlighted] = useState(false)
    const {setBookPage} = useContext(BookPageContext)
    useCursor(highlighted)

    const [ picture, picture2, pictureRoughness ] = useTexture([
        front.src,
        back.src,
        ...(number === 0 || number === pages.length -1)
        ? [bookCoverRouhness.src]
        : []
    ])
    picture.colorSpace = picture2.colorSpace = SRGBColorSpace

    const manualSkinnedMesh = useMemo(() => {
        const bones = []

        for (let i = 0; i <= PAGE_SEGMENTS; i++) {
            let bone = new Bone()
            bones.push(bone)
            if(i === 0){
                bone.position.x = 0
            } else {
                bone.position.x = SEGMENT_WIDTH
            }

            if (i > 0){
                bones[i - 1].add(bone) // attach de new bone to the previous
            }
        }

        const skeleton = new Skeleton(bones)
        const materials = [...pageMaterials,
            new MeshStandardMaterial({
                color: whiteColor,
                map: picture,
                ...(number === 0
                    ? {
                        roughnessMap: pictureRoughness,
                    }
                    : {
                        roughness: 0.1,
                    }
                )
            }),
            new MeshStandardMaterial({
                color: whiteColor,
                map: picture2,
                ...(number === pages.length - 1
                    ? {
                        roughnessMap: pictureRoughness,
                    }
                    : {
                        roughness: 0.1,
                    }
                )
            }),
        ]
        const mesh = new SkinnedMesh(pageGeometry, materials)
        mesh.castShadow = true
        mesh.receiveShadow = true
        mesh.frustumCulled = false
        mesh.add(skeleton.bones[0])
        mesh.bind(skeleton)

        return mesh
    }, [])

    // useHelper(skinnedMeshRef, SkeletonHelper, "red")

    useFrame((_, delta) => {
        if(!skinnedMeshRef.current){
            return
        }

        if(lastOpened.current !== opened){
            turnedAt.current = +new Date()
            lastOpened.current = opened
        }
        let turningTime = Math.min(400, new Date() - turnedAt.current) / 400
        turningTime = Math.sin(turningTime * Math.PI)

        let targetRotation = opened ? -Math.PI / 2 : Math.PI / 2
        if(!bookClosed){
            targetRotation += degToRad(number * 0.8)
        }
        const bones = skinnedMeshRef.current.skeleton.bones

        for (let i = 0; i < bones.length; i++) {
            
            const target = i === 0 ? groupRef.current : bones[i]
            const insideCurvIntensity = i < 8 ? Math.cos(i * 0.2 + 0.25) : 0
            const outsideCurvIntensity = i >= 8 ? Math.cos(i * 0.25 + 0.09) : 0
            const turningIntensity = Math.sin(i * Math.PI * (1 / bones.length)) * turningTime

            let rotationAngle =
                insideCurvStrength * insideCurvIntensity * targetRotation -
                outsideCurvStrength * outsideCurvIntensity * targetRotation +
                turningCurvStrength * turningIntensity * targetRotation;

            let foldRotationAngle = degToRad(Math.sign(targetRotation) * 2)

            if(bookClosed){
                if(i === 0){
                    rotationAngle = targetRotation
                    foldRotationAngle = 0
                } else {
                    rotationAngle = 0
                    foldRotationAngle = 0
                }
            }
            easing.dampAngle(
                target.rotation,
                "y",
                rotationAngle,
                easingFactor,
                delta
            )

            const foldIntensity = i > 8 ? Math.sin(i * Math.PI * (1 / bones.length) - 0.5) + turningTime : 0
            easing.dampAngle(
                target.rotation,
                "x",
                foldRotationAngle * foldIntensity * 0.3,
                easingFactorFold,
                delta
            );
        }
    })

    return(
        <group
            {...props} 
            ref={groupRef}
            onPointerEnter={(e) => {
                e.stopPropagation()
                setHighlighted(true)
            }}
            onPointerLeave={(e) => {
                e.stopPropagation()
                setHighlighted(false)
            }}
            onClick={(e) => {
                e.stopPropagation()
                setBookPage(opened ? number : number + 1)
                setHighlighted(false)
                turnPage()
            }}
        >
            <primitive
                object={manualSkinnedMesh}
                ref={skinnedMeshRef}
                position-z={-number * PAGE_DEPTH + page * PAGE_DEPTH}
            />
        </group>
    )
}

export default function Book ( {...props} ){

    const {bookPage} = useContext(BookPageContext)
    const [delayedPage, setDelayedPage] = useState(bookPage)
    const pageSoundRef = useRef()

    function turnPage() {
        if(pageSoundRef.current) pageSoundRef.current.play()
    }

    useEffect(() => {
        let timeOut
        const goToPage = () => {
            setDelayedPage((delayedPage) => {
                if(bookPage === delayedPage){
                    return delayedPage
                } else {
                    timeOut = setTimeout(
                        () => { goToPage() },
                        Math.abs(bookPage - delayedPage) > 2 ? 50 : 150
                    )

                    if(bookPage > delayedPage){
                        return delayedPage + 1
                    }
                    if(bookPage < delayedPage){
                        return delayedPage - 1
                    }
                }
            })
        }
        goToPage()
        return () => {
            clearTimeout(timeOut)
        }
    }, [bookPage])

    return (
        <>
            <group {...props} rotation-y={-Math.PI / 2}>
                {
                    [...pages].map((pageData, index) => {
                        return(
                            <Page
                                key={index}
                                page={delayedPage}
                                number={index}
                                opened={delayedPage > index}
                                bookClosed={delayedPage === 0 || delayedPage === pages.length}
                                turnPage= {turnPage}
                                {...pageData}
                            />
                        )

                    })
                }
            </group>
            <Html>
                <audio src="/lemuth_portfolio/sound/one-page-book-flip.mp3" ref={pageSoundRef} />
            </Html>
        </>
    )
}