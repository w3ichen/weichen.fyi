import { styled } from "@mui/material";
import React from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";

const PROFILE_IMG_SIZE = 200;

const calcX = (y: number, ly: number) =>
  -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 20;

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
  objectPosition: "center",
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

  const domTarget = React.useRef(null);
  // Animate profile image on hover
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    })
  );
  useGesture(
    {
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.1,
        }),
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { target: domTarget, eventOptions: { passive: false } }
  );
  return (
    <Root>
      <CoverImage src="banner_img.jpeg" alt="cover image" />
      <animated.div
        ref={domTarget}
        style={{
          transform: "perspective(600px)",
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
        }}
      >
        <ProfileImage src="profile_img.jpeg" alt="profile image" />
      </animated.div>
    </Root>
  );
}
