import { Box, Stack, StackProps, styled } from "@mui/material";
import { CAP_IMG_MAX_HEIGHT, StyledImage } from "../HeroImage/CaptionedImage";
import Viewer3D from "./Viewer3D";

const Viewer3DContainer = styled(Box)(({}) => ({
  display: "flex",
  flex: 1,
  borderRadius: "30px",
  overflow: "hidden",
}));

const ImageContainer = styled(Box)(({}) => ({
  display: "flex",
  flex: 1,
  borderRadius: "30px",
  overflow: "hidden",
}));

interface Props extends StackProps {
  imgSrc: string;
  glbFile: string;
}
export default function Viewer3DWithImage({ glbFile, imgSrc, ...rest }: Props) {
  return (
    <Stack
      display="flex"
      direction={{ md: "row", xs: "column-reverse" }}
      mx="auto"
      spacing={1}
      {...rest}
    >
      <Viewer3DContainer>
        <Viewer3D glbFile={glbFile} height={CAP_IMG_MAX_HEIGHT + "px"} />
      </Viewer3DContainer>
      <ImageContainer>
        <StyledImage src={imgSrc} unconstrained={false} />
      </ImageContainer>
    </Stack>
  );
}
