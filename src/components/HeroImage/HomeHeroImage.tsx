import { styled, Theme } from "@mui/material";
import { animated, to, useSpring } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { get } from "lodash";
import React from "react";
import { DEFAULT_ROLE, HOME_HERO, Role } from "../Page/PageContext";

export const PROFILE_IMG_SIZE = 200;
export const COVER_IMG_HEIGHT = 300;
const IMG_TRANSITION = "all .3s ease-in-out";

const calcX = (y: number, ly: number) =>
  -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 20;

const Root = styled("div")(({}) => ({
  overflow: "visible",
  borderRadius: "30px",
  marginBottom: `calc(${PROFILE_IMG_SIZE / 2}px + 50px)`,
  position: "relative",
}));

const ProfileImage = styled("div")(
  ({ theme, src }: { theme?: Theme; src: string }) => ({
    position: "absolute",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: "50%",
    width: PROFILE_IMG_SIZE + "px",
    height: PROFILE_IMG_SIZE + "px",
    bottom: `-${PROFILE_IMG_SIZE / 2}px`,
    left: `calc(50% - ${PROFILE_IMG_SIZE / 2}px)`,
    boxShadow: theme!.shadows[10],
    transition: IMG_TRANSITION,
    border: `3px solid ${theme!.palette.primary.dark}`,
    backgroundImage: `url(${src})`, // Transition needs to be background-image
    backgroundSize: "cover",
    backgroundPosition: "center",
    "&:hover": {
      // On hover, increase the shadow
      boxShadow: theme!.shadows[20],
    },
  })
);

const CoverImage = styled("div")(({ src }: { theme?: Theme; src: string }) => ({
  // Force the same height
  minHeight: COVER_IMG_HEIGHT + "px",
  maxHeight: COVER_IMG_HEIGHT + "px",
  height: COVER_IMG_HEIGHT + "px",

  width: "100%",
  objectFit: "cover",
  backgroundSize: "cover",
  objectPosition: "center",
  borderRadius: "30px",

  // Smooth transition
  backgroundImage: `url(${src})`, // Transition needs to be background-image
  backgroundPosition: "center",
  transition: IMG_TRANSITION,
  WebkitTransition: IMG_TRANSITION,
  MozTransition: IMG_TRANSITION,
}));

interface Props {
  role: Role | null;
}
export default function HomeHeroImage({ role }: Props) {
  const { cover, profile } = get(HOME_HERO, role || DEFAULT_ROLE);

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
      <CoverImage src={cover} />
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
        <ProfileImage src={profile} />
      </animated.div>
    </Root>
  );
}
