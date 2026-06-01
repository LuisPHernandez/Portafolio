import { Center, Environment, Float, OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";
import type { ObjectMap } from "@react-three/fiber";

const Model = ({ model }: { model: any }) => {
    const gltf = useGLTF(model.modelPath) as GLTF & ObjectMap;

    return (
        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group scale={model.scale} rotation={model.rotation}>
                <Center>
                    <primitive object={gltf.scene} />
                </Center>
            </group>
        </Float>
    );
}

const TechIcon = ({ model }: { model: any }) => {
    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} />
            <Model model={model} />
        </Canvas>
    )
}

export default TechIcon;