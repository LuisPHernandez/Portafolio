import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { Office } from './Office.jsx'
import HeroLights from './HeroLights.js'
import Particles from './Particles.jsx'

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Canvas camera={{ position: [2, 3, 13], fov: 45}}>
            <HeroLights />
            <Particles count={100} />

            <OrbitControls 
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <group
                scale={isMobile? 0.032 : 0.04}
                position={[1, -2, 0]}
                rotation={[0, -5 * Math.PI/8, 0]}
            >
                <Office />
            </group>
        </Canvas>
    )
}

export default HeroExperience