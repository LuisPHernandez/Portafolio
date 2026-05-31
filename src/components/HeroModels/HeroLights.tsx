import * as THREE from 'three'

const HeroLights = () => {
    return (
        <>
            <spotLight 
                position={[0, 3, 8]} 
                angle={0.5}
                intensity={125} 
                color="white"
                penumbra={0.5}
            />

            <primitive
                object={new THREE.RectAreaLight('#060b53', 8, 3, 2)}
                position={[0, 1, 4]}
                intensity={15}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
            />
        </>
    )
}

export default HeroLights