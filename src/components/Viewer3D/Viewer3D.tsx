import { Environment, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ErrorBoundary } from "./common";
import { Suspense } from "react";
import ObjModel from "./ObjModel";
import GlbModel from "./GlbModel";

export interface Viewer3DProps {
  objFile?: string;
  glbFile?: string;
  textureFile?: string;
  width?: string | number;
  height?: string | number;
  cameraPosition?: [number, number, number];
}
export default function Viewer3D({
  glbFile,
  objFile,
  textureFile,
  width = "100%",
  height = "100%",
  cameraPosition = [10, 10, 10],
}: Viewer3DProps) {
  return (
    <Canvas
      key={glbFile || objFile}
      id={glbFile || objFile}
      style={{ height, width, borderRadius: "30px" }}
      // Camera position: [x, y, z], y is up, fov 50 is similar to human eye
      camera={{ position: cameraPosition, fov: 50 }} // Initial camera position
    >
      <OrbitControls makeDefault autoRotate />
      <ErrorBoundary fallback={null}>
        <Suspense fallback={null}>
          <Stage intensity={0} environment={null}>
            <Environment background={false} files="environment.hdr" path="/" />
            {!!glbFile && <GlbModel glbFile={glbFile} />}
            {!!objFile && (
              <ObjModel objFile={objFile} textureFile={textureFile} />
            )}
          </Stage>
        </Suspense>
      </ErrorBoundary>
      <color attach="background" args={["white"]} />
    </Canvas>
  );
}
