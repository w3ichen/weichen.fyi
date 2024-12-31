/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoader } from "@react-three/fiber";
import { MTLLoader, OBJLoader } from "three-stdlib";

interface Props {
  objFile: string;
  textureFile: string;
}

/**
 * Load .obj file with its texture
 * https://stackoverflow.com/a/68737225/21167368
 * https://github.com/pmndrs/react-three-fiber/discussions/808#discussioncomment-130580
 * @param objFile .obj file path
 * @param textureFile .mtl file path
 * @returns ThreeJS <mesh> object
 */
export default function ObjModel({ objFile, textureFile }: Props) {
  const materials = useLoader(MTLLoader, textureFile);
  const object = useLoader(OBJLoader, objFile, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return <primitive object={object} />;
}
