import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import styled from 'styled-components';
import Earth from './threeD/Earth';
import Iss from './threeD/Iss';

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #01040c;
`

const Marquee = {
  position: "absolute",
  left: "50%",
  top: "50%",
  width: 200,
  zIndex: 0,
}


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 15000);
  }, []);

  return (
    <>
    {loading ? (
        <marquee className="translate-middle text-primary" style={Marquee} >Loading 3D ISS....Please Wait..</marquee>
      ) : [] }
    <CanvasContainer>
      <Canvas camera={{fov: 60, position: [4, 1, 5]}}>
        <OrbitControls autoRotateSpeed={0.2} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4}/>
        <Suspense fallback={null}>
          <pointLight color="#f6f3ea" position={[-10000, 1000, 27000]} intensity={3000000000}/>
          <Iss/>
          <Earth/>
        </Suspense>
      </Canvas>
    </CanvasContainer>
    </>
  )
}
