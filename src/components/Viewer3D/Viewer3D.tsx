import { Environment, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ErrorBoundary } from "./common";
import { Suspense } from "react";
import ObjModel from "./ObjModel";

interface Props {
  objFile: string;
  textureFile: string;
}
export default function Viewer3D({ objFile, textureFile }: Props) {
  return (
    <Canvas>
      <OrbitControls autoRotate />
      <ErrorBoundary fallback={null}>
        <Suspense fallback={null}>
          <Stage intensity={0.5} environment={null}>
            <Environment background={false} files="environment.hdr" path="/" />
            <ObjModel objFile={objFile} textureFile={textureFile} />
          </Stage>
        </Suspense>
      </ErrorBoundary>
      <color attach="background" args={["white"]} />
    </Canvas>
  );
}
