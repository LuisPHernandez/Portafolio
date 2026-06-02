import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { Office } from './Office.jsx'
import HeroLights from './HeroLights.js'
import Particles from './Particles.jsx'
import * as THREE from 'three'

const RotatingOffice = ({ isMobile }: { isMobile: boolean }) => {
    const groupRef = useRef<THREE.Group>(null)

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.3
        }
    })

    return (
        <group
            ref={groupRef}
            scale={isMobile ? 0.032 : 0.04}
            position={[1, -2, 0]}
            rotation={[0, -5 * Math.PI / 8, 0]}
        >
            <Office />
        </group>
    )
}

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Canvas camera={{ position: [2, 3, 13], fov: 45 }}>
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

            <RotatingOffice isMobile={isMobile} />
        </Canvas>
    )
}

export default HeroExperience