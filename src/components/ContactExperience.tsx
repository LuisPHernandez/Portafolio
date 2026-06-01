import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Laptop } from "./Models/Laptop"

const ContactExperience = () => {
    return (
        <Canvas camera={{ position: [0, 2, 9], fov: 45 }} shadows>
            <ambientLight intensity={0.5} color="white" />
            <directionalLight position={[5, 5, 5]} intensity={2.5} color="#ffd9b3" />
            <spotLight
                position={[-5, 5, 5]}
                angle={0.15}
                penumbra={1}
                intensity={1}
                castShadow
            />

            <OrbitControls
                enableZoom={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2}
            />

            <group scale={8.5} position={[-0.4, -0.7, 0]} rotation={[0, 10 * Math.PI / 9, 0]} castShadow>
                <Laptop />
            </group>
        </Canvas>
    )
}

export default ContactExperience