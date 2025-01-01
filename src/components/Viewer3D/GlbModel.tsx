import { useGLTF } from "@react-three/drei";

interface Props {
  glbFile: string;
}
export default function GlbModel({ glbFile }: Props) {
  const { scene } = useGLTF(glbFile);

  return <primitive object={scene} />;
}
