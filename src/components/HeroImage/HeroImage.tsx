import { styled } from "@mui/material";
import React from "react";

const PROFILE_IMG_SIZE = 200;

const Root = styled("div")(({}) => ({
  overflow: "visible",
  borderRadius: "30px",
  marginBottom: `calc(${PROFILE_IMG_SIZE / 2}px + 50px)`,
  position: "relative",
}));

const CoverImage = styled("img")({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  borderRadius: "30px",
  minHeight: "300px",
});

const ProfileImage = styled("img")(({ theme }) => ({
  position: "absolute",
  objectFit: "cover",
  borderRadius: "50%",
  width: PROFILE_IMG_SIZE + "px",
  height: PROFILE_IMG_SIZE + "px",
  bottom: `-${PROFILE_IMG_SIZE / 2}px`,
  left: `calc(50% - ${PROFILE_IMG_SIZE / 2}px)`,
  boxShadow: theme.shadows[10],
  //   transition: "box-shadow 1s",
  transition: "box-shadow 0.5s",
  "&:hover": {
    // On hover, increase the shadow
    boxShadow: theme.shadows[20],
  },
  border: `3px solid ${theme.palette.primary.dark}`,
}));

export default function HeroImage() {
  //   const { role } = React.useContext(PageContext);

  return (
    <Root>
      <CoverImage src="banner_img.jpeg" alt="cover image" />
      <ProfileImage src="profile_img.jpeg" alt="profile image" />
    </Root>
  );
}
