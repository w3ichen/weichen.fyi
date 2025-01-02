import Viewer3D, { Viewer3DProps } from "../Viewer3D/Viewer3D";
import CaptionedBase, { CaptionedBaseProps } from "./CaptionedBase";

export const CAP_3D_HEIGHT = 300;

interface Props extends Omit<CaptionedBaseProps, "children"> {
  src: string;
  viewer3DProps?: Viewer3DProps;
}
export default function CaptionedViewer3D({
  src,
  viewer3DProps = {},
  ...rest
}: Props) {
  return (
    <CaptionedBase {...rest}>
      <Viewer3D
        glbFile={src}
        width="100%"
        height={CAP_3D_HEIGHT + "px"}
        {...viewer3DProps}
      />
    </CaptionedBase>
  );
}
