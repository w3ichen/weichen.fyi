import { styled, Theme } from "@mui/material";
import CaptionedBase, { CaptionedBaseProps } from "./CaptionedBase";
import { ImgHTMLAttributes } from "react";

export const CAP_VIDEO_MAX_HEIGHT = 300;
const StyledVideo = styled("video")(
  ({ theme, unconstrained }: { theme?: Theme; unconstrained: boolean }) => ({
    width: "100%",
    height: "auto",
    margin: "auto",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: unconstrained ? "0px" : "30px",
    maxHeight: unconstrained ? "unset" : CAP_VIDEO_MAX_HEIGHT + "px",
    [theme!.breakpoints.down("md")]: {
      width: "100% !important",
    },
  })
);

interface Props extends Omit<CaptionedBaseProps, "children"> {
  src: string;
  unconstrained?: boolean; // Remove the max-height constraint and border-radius
  videoProps?: ImgHTMLAttributes<HTMLVideoElement>;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}
export default function CaptionedVideo({
  src,
  unconstrained = false,
  videoProps = {},
  autoPlay = true,
  muted = true,
  loop = true,
  controls = true,
  ...rest
}: Props) {
  return (
    <CaptionedBase {...rest}>
      <StyledVideo
        src={src}
        autoPlay={autoPlay}
        muted={autoPlay || muted} // Must be muted for autoPlay to work
        loop={loop}
        unconstrained={unconstrained}
        controls={controls}
        controlsList="nodownload" // Disable download button
        {...videoProps}
      />
    </CaptionedBase>
  );
}
