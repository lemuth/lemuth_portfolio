export default function Background({nodes, materials}) {
    return (
        <group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes}
                material={materials}
                position={[0, 0.043, 0]}
                scale={0.001}
            />
        </group>
    )
}