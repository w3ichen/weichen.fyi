import { Environment, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ErrorBoundary } from "./common";
import { Suspense } from "react";
import ObjModel from "./ObjModel";
import GlbModel from "./GlbModel";

interface Props {
  objFile?: string;
  glbFile?: string;
  textureFile?: string;
  width?: string | number;
  height?: string | number;
}
export default function Viewer3D({
  glbFile,
  objFile,
  textureFile,
  width = "100%",
  height = "100%",
}: Props) {
  return (
    <Canvas
      key={glbFile || objFile}
      id={glbFile || objFile}
      style={{ height, width }}
      // Camera position: [x, y, z], y is up, fov 50 is similar to human eye
      camera={{ position: [10, 7, 10], fov: 50 }} // Initial camera position
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
