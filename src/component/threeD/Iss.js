import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

function Model(props) {
    const group = useRef(new THREE.Group());

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(
      '/iss/iss.glb',
      (gltf) => {
        group.current.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error('Error loading GLB model', error);
      }
    );
  }, []);

  return group.current ? <primitive object={group.current} {...props} /> : null;
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
