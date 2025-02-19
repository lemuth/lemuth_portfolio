export default function Pannel ({nodes, materials}) {
    return(
        <group>
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
        </group>
    )
}