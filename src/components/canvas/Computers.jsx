import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { useScreenSize } from "../../utils/ScreenSizeContext";

function Computers({ isMobile }) {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <spotLight
        position={[0, 25, 0]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.001}
      />
      {/* <spotLight
        position={[0, 15, 5]}
        angle={0.8}
        penumbra={0.5}
        intensity={1}
        castShadow
      /> */}
      <pointLight
        position={isMobile ? [0, 0, -1] : [0, 0.4, 0.2]}
        intensity={1}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.45}
        position={isMobile ? [0, -1.6, -1.5] : [0, -1.6, -1]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
}

function ComputerCanvas() {
  const isMobile = useScreenSize();

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [10, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default ComputerCanvas;
