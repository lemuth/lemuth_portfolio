export default function Fence({nodes, materials}) {
    return (
        <group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes}
                material={materials}
                position={[0, -0.264, 0]}
                rotation={[-0.018, 0, 0]}
                scale={0.001}
            />
        </group>
    )
}