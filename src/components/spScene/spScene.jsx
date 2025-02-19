import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import FakeGlowMaterial from '../FakeGlowMaterial/FakeGlowMaterial'
import Character from './mesh/character'
import Pannel from './mesh/pannel'
import Trees from './mesh/trees'
import Background from './mesh/background'
import Fence from './mesh/fence'

export default function Model(props) {

    const { nodes, materials } = useGLTF('./models/spScene.glb')
    const gnomesData = [
        {id: 1, geoFile: 'jsDwarf'},
        {id: 2, geoFile: 'toshopDwarf'},
        {id: 3, geoFile: 'sqlDwarf'},
        {id: 4, geoFile: 'mongoDwarf'},
        {id: 5, geoFile: 'nextjsDwarf'},
        {id: 6, geoFile: 'htmlDwarf'},
        {id: 7, geoFile: 'threeDwarf'},
        {id: 8, geoFile: 'tsDwarf'},
        {id: 9, geoFile: 'reactDwarf'},
        {id: 10, geoFile: 'tailwindDwarf'},
        {id: 11, geoFile: 'cssDwarf'},
        {id: 12, geoFile: 'nodejsDwarf'},
        {id: 13, geoFile: 'dirtyDwarf'},
    ]
    
    return (
        <group {...props} dispose={null}>
            <Background nodes={nodes.background001.geometry} materials={materials['wire_140088225.007']} />
            <Character />
            <Pannel nodes={nodes} materials={materials} />
            <Trees nodes={nodes} materials={materials['wire_154185229.007']} />
            <Fence nodes={nodes.fence.geometry} materials={materials.wire_057008136} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.trotoir.geometry}
                material={materials.concrete}
                position={[0, 7.561, 15.593]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.001}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.sol003.geometry}
                material={materials.neige}
                rotation={[-0.008, 0, 0]}
                scale={0.001}
            />
            {
                gnomesData.map((gnome, index) => {
                    return (
                        <group
                            key={`gnome_ ${index}`}
                            rotation={[0.039, 0, 0]}
                            scale={0.001}
                            onPointerOver={() => props.setActivePannel({ isActive: true, id: gnome.id })}
                            onPointerOut={() => props.setActivePannel({ isActive: false, id: null })}
                        >
                            {
                                props.activePannel.id === gnome.id && 
                                <mesh
                                    castShadow
                                    receiveShadow
                                    geometry={nodes[gnome.geoFile].geometry}
                                    material={materials.wire_143225087}
                                >
                                    <FakeGlowMaterial
                                        falloff={0.8}
                                        glowInternalRadius={0.7}
                                        glowColor={"#4ff0c4"}
                                        glowSharpness={2.3}
                                        side={"THREE.FrontSide"}
                                        opacity={0.3}
                                        depthTest={false}
                                    />
                                </mesh>
                            }
                            <mesh
                                castShadow
                                receiveShadow
                                geometry={nodes[gnome.geoFile].geometry}
                                material={materials.wire_143225087}
                            />
                        </group>
                    )
                })
            }
        </group>
    )
}

useGLTF.preload('./models/spScene.glb')