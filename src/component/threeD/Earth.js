import React, { useRef } from 'react';
import EarthDayMap from './textures/8k_earth_daymap.jpg';
import EarthClouds from './textures/8k_earth_clouds.jpg';
import EarthNormalMap from './textures/8k_earth_normal_map.jpg';
import EarthSpecularMap from './textures/8k_earth_specular_map.jpg';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import { Stars } from '@react-three/drei';

export default function Earth(props) {
  const [ colorMap, normalMap, specularMap, cloudsMap ] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthClouds]);

  const earthRef = useRef();
  const cloudRef = useRef();

  useFrame(({clock}) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.x = elapsedTime / -250;
    cloudRef.current.rotation.x = elapsedTime / -250;
    earthRef.current.rotation.y = elapsedTime / -900;
    cloudRef.current.rotation.y = elapsedTime / -900;
  })

  return (
    <>
      <Stars radius={300} depth={70} count={20000} factor={7} saturation={0} fade={true} />
      <mesh ref={cloudRef} position={[ -40, -180, -130]}>
        <sphereGeometry args={[ 200, 32, 32 ]} />
        <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={earthRef} position={[-40, -180, -130]}>
        <sphereGeometry args={[ 199.89, 32, 32 ]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
      </mesh>
    </>
  )
}
