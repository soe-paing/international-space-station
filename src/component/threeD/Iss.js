import { useGLTF } from '@react-three/drei';
import React from 'react';

function Model( props ) {
  const { scene } = useGLTF("/iss/iss.glb");
  return <primitive object={scene} { ...props } />
}

export default function ISS() {
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <Model scale={2} />
      </mesh>
    </>
  )
}
