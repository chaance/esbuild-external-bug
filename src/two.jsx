import * as React from "react";
import { Box } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Two() {
  return (
    <>
      <p>Two</p>
      <Canvas>
        <Box args={[3, 3, 3]} />
      </Canvas>
    </>
  );
}
