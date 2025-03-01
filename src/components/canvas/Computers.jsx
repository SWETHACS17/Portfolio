import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  
  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="black" />

      {/* Existing Spotlight for General Scene Lighting */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <pointLight intensity={1} position={[0, -1, 0]}/>

      {/* New Large Area Light for Table */}
      <rectAreaLight
        width={6}
        height={6}
        intensity={2}
        color={"#ffffff"}
        position={[0, -2, 5.6]}
        lookAt={[1, -8, 40]}
        castShadow
      />

      <rectAreaLight
        width={8}
        height={8}
        intensity={2}
        color={"#ffffff"}
        position={[7, -1, 1]} // Move to the right side
        lookAt={[-40, -8, 1]} // Pointing left
        castShadow
/>


      {/* Two Side Lights for Depth */}
      <pointLight position={[-2, -2, 1]} intensity={1.5} color={"#ffaa88"} />
      <pointLight position={[2, -2, 1]} intensity={1.5} color={"#88aaff"} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.40 : 0.65}
        position={isMobile ? [0, -4.5, -0.5] : [0, -2.90, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: isMobile ? 35 : 25 }}
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
};

export default ComputersCanvas;