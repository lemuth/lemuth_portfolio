import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import FakeGlowMaterial from '../FakeGlowMaterial/FakeGlowMaterial'

export default function Model(props) {
    const { nodes, materials } = useGLTF('./models/spScene.glb')
    return (
        <group {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.jambes001.geometry}
            material={materials.pant}
            position={[0, 0.044, 6.078]}
            scale={0.001}
        />
        <group position={[0, 0.044, 6.078]} scale={0.001}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.pied_right001_1.geometry}
            material={materials.shoes}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.pied_right001_2.geometry}
            material={materials['shoes_bt.001']}
            />
        </group>
        <group position={[0, 0.044, 6.078]} scale={0.001}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.pied_left001_1.geometry}
            material={materials.shoes}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.pied_left001_2.geometry}
            material={materials.shoes_bt}
            />
        </group>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.smile001.geometry}
            material={materials['wire_027177027.007']}
            position={[0, 0.044, 6.078]}
            scale={0.001}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.oeil_right001.geometry}
            material={materials['eye-white']}
            position={[0, 0, 6.078]}
            scale={0.001}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.oeil_left001.geometry}
            material={materials['eye-white']}
            position={[0, 0, 6.078]}
            scale={0.001}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.iris_L001.geometry}
            material={materials.eye_black}
            position={[0, 0, 6.078]}
            scale={0.001}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.barbe001.geometry}
            material={materials.chevelure}
            position={[0, 0.044, 6.078]}
            scale={0.001}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.coiffure001.geometry}
            material={materials.chevelure}
            position={[0, 0.044, 6.078]}
            scale={0.001}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.bouton1001.geometry}
            material={materials['wire_006135113.007']}
            position={[0.019, 0.044, 6.052]}
            scale={0.001}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.broncos_patch001.geometry}
            material={materials['Material__34.007']}
            position={[0.019, 0.044, 6.052]}
            scale={0.001}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.corp001.geometry}
            material={materials.body}
            position={[0, 0.044, 6.078]}
            scale={0.001}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.panneau_stick.geometry}
            material={materials.pannel_stick}
            position={[-0.788, 0, 5.569]}
            scale={0.001}
        />
        <group position={[-0.788, 0, 5.569]} scale={0.001}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.panneau_top001_1.geometry}
            material={materials.pannel_front}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.panneau_top001_2.geometry}
            material={materials.pannel_sides}
            />
        </group>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tree001001.geometry}
            material={materials['wire_154185229.007']}
            scale={0.001}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tree002001.geometry}
            material={materials['wire_154185229.007']}
            scale={0.001}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tree003001.geometry}
            material={materials['wire_154185229.007']}
            scale={0.001}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tree004001.geometry}
            material={materials['wire_154185229.007']}
            scale={0.001}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tree005001.geometry}
            material={materials['wire_154185229.007']}
            scale={0.001}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tree006001.geometry}
            material={materials['wire_154185229.007']}
            scale={0.001}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tree007001.geometry}
            material={materials['wire_154185229.007']}
            position={[0, 0, -1.118]}
            scale={0.001}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.background001.geometry}
            material={materials['wire_140088225.007']}
            position={[0, 0.043, 0]}
            scale={0.001}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere040002.geometry}
            material={materials.skin}
            position={[0, 0.044, 6.078]}
            scale={0.001}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.iris_L001001.geometry}
            material={materials.eye_black}
            position={[0, 0, 6.078]}
            scale={0.001}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.fence.geometry}
            material={materials.wire_057008136}
            position={[0, -0.264, 0]}
            rotation={[-0.018, 0, 0]}
            scale={0.001}
        />
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
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.bouton1002.geometry}
            material={materials['wire_006135113.001']}
            position={[0.106, -0.194, 6.139]}
            scale={0.001}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.bouton1003.geometry}
            material={materials['wire_006135113.002']}
            position={[0.196, -0.451, 6.21]}
            scale={0.001}
        />
        <group
            // position={[21.877, 0, -2.576]}
            rotation={[0.039, 0, 0]}
            scale={0.001}
            onPointerOver={() => props.setActivePannel({ isActive: true, id: 12 })}
            onPointerOut={() => props.setActivePannel({ isActive: false, id: null })}
        >
            {
                props.activePannel.id === 12 && 
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.nodejsDwarf.geometry}
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
                geometry={nodes.nodejsDwarf.geometry}
                material={materials.wire_143225087}
            >
            </mesh>
        </group>
        <group
            // position={[21.877, 0, -2.576]}
            rotation={[0.039, 0, 0]}
            scale={0.001}
            onPointerOver={() => props.setActivePannel({ isActive: true, id: 5 })}
            onPointerOut={() => props.setActivePannel({ isActive: false, id: null })}
        >
            {
                props.activePannel.id === 5 && 
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.nextjsDwarf.geometry}
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
                geometry={nodes.nextjsDwarf.geometry}
                material={materials.wire_143225087}
            >
            </mesh>
        </group>
        <group
            // position={[21.877, 0, -2.576]}
            rotation={[0.039, 0, 0]}
            scale={0.001}
            onPointerOver={() => props.setActivePannel({ isActive: true, id: 4 })}
            onPointerOut={() => props.setActivePannel({ isActive: false, id: null })}
        >
            {
                props.activePannel.id === 4 && 
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mongoDwarf.geometry}
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
                geometry={nodes.mongoDwarf.geometry}
                material={materials.wire_143225087}
            >
            </mesh>
        </group>
        <group
            // position={[21.877, 0, -2.576]}
            rotation={[0.039, 0, 0]}
            scale={0.001}
            onPointerOver={() => props.setActivePannel({ isActive: true, id: 9 })}
            onPointerOut={() => props.setActivePannel({ isActive: false, id: null })}
        >
            {
                props.activePannel.id === 9 && 
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.reactDwarf.geometry}
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
                geometry={nodes.reactDwarf.geometry}
                material={materials.wire_143225087}
            >
            </mesh>
        </group>
        <group
            // position={[21.877, 0, -2.576]}
            rotation={[0.039, 0, 0]}
            scale={0.001}
            onPointerOver={() => props.setActivePannel({ isActive: true, id: 6 })}
            onPointerOut={() => props.setActivePannel({ isActive: false, id: null })}
        >
            {
                props.activePannel.id === 6 && 
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.htmlDwarf.geometry}
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
                geometry={nodes.htmlDwarf.geometry}
                material={materials.wire_143225087}
            >
            </mesh>
        </group>
        <group
            // position={[21.877, 0, -2.576]}
            rotation={[0.039, 0, 0]}
            scale={0.001}
            onPointerOver={() => props.setActivePannel({ isActive: true, id: 11 })}
            onPointerOut={() => props.setActivePannel({ isActive: false, id: null })}
        >
            {
                props.activePannel.id === 11 && 
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.cssDwarf.geometry}
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
                geometry={nodes.cssDwarf.geometry}
                material={materials.wire_143225087}
            >
            </mesh>
        </group>
        <group
            // position={[21.877, 0, -2.576]}
            rotation={[0.039, 0, 0]}
            scale={0.001}
            onPointerOver={() => props.setActivePannel({ isActive: true, id: 1 })}
            onPointerOut={() => props.setActivePannel({ isActive: false, id: null })}
        >
            {
                props.activePannel.id === 1 && 
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.jsDwarf.geometry}
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
                geometry={nodes.jsDwarf.geometry}
                material={materials.wire_143225087}
            >
            </mesh>
        </group>
        <group
            // position={[21.877, 0, -2.576]}
            rotation={[0.039, 0, 0]}
            scale={0.001}
            onPointerOver={() => props.setActivePannel({ isActive: true, id: 2 })}
            onPointerOut={() => props.setActivePannel({ isActive: false, id: null })}
        >
            {
                props.activePannel.id === 2 && 
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.toshopDwarf.geometry}
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
                geometry={nodes.toshopDwarf.geometry}
                material={materials.wire_143225087}
            >
            </mesh>
        </group>
        <group
            // position={[21.877, 0, -2.576]}
            rotation={[0.039, 0, 0]}
            scale={0.001}
            onPointerOver={() => props.setActivePannel({ isActive: true, id: 10 })}
            onPointerOut={() => props.setActivePannel({ isActive: false, id: null })}
        >
            {
                props.activePannel.id === 10 && 
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.tailwindDwarf.geometry}
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
                geometry={nodes.tailwindDwarf.geometry}
                material={materials.wire_143225087}
            >
            </mesh>
        </group>
        <group
            // position={[21.877, 0, -2.576]}
            rotation={[0.039, 0, 0]}
            scale={0.001}
            onPointerOver={() => props.setActivePannel({ isActive: true, id: 3 })}
            onPointerOut={() => props.setActivePannel({ isActive: false, id: null })}
        >
            {
                props.activePannel.id === 3 && 
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.sqlDwarf.geometry}
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
                geometry={nodes.sqlDwarf.geometry}
                material={materials.wire_143225087}
            >
            </mesh>
        </group>
        <group
            // position={[21.877, 0, -2.576]}
            rotation={[0.039, 0, 0]}
            scale={0.001}
            onPointerOver={() => props.setActivePannel({ isActive: true, id: 7 })}
            onPointerOut={() => props.setActivePannel({ isActive: false, id: null })}
        >
            {
                props.activePannel.id === 7 && 
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.threeDwarf.geometry}
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
                geometry={nodes.threeDwarf.geometry}
                material={materials.wire_143225087}
            >
            </mesh>
        </group>
        <group
            // position={[21.877, 0, -2.576]}
            rotation={[0.039, 0, 0]}
            scale={0.001}
            onPointerOver={() => props.setActivePannel({ isActive: true, id: 8 })}
            onPointerOut={() => props.setActivePannel({ isActive: false, id: null })}
        >
            {
                props.activePannel.id === 8 && 
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.tsDwarf.geometry}
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
                geometry={nodes.tsDwarf.geometry}
                material={materials.wire_143225087}
            >
            </mesh>
        </group>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.dirtyDwarf.geometry}
            material={materials.wire_143225087}
            rotation={[0.039, 0, 0]}
            scale={0.001}
        />
        </group>
    )
}

useGLTF.preload('./models/spScene.glb')