import { useGLTF } from '@react-three/drei'

export default function Character(){
    const { nodes, materials } = useGLTF('./models/spScene.glb')
    return (
        <group>
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
                geometry={nodes.iris_L001001.geometry}
                material={materials.eye_black}
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
        </group>
    )
}