import { Environment, Float, OrbitControls, SoftShadows } from "@react-three/drei";
import Book from "@/components/Book/Book";

export default function BaseScene(){
    return (
        <>
            <SoftShadows size={25} samples={20} focus={0.5} />
            <Float
                rotation-x={-Math.PI / 4}
                floatIntensity={1}
                speed={0.8}
                rotationIntensity={2}
            >
                <Book />
            </Float>
            <OrbitControls />
            <Environment preset="studio"></Environment>
            <directionalLight
                position={[2, 5, 2]}
                intensity={3.5}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.0001}
            />
            <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
                <planeGeometry args={[100, 100]} />
                <shadowMaterial
                    transparent
                    opacity={0.8}
                />
            </mesh>
        </>
    );
}