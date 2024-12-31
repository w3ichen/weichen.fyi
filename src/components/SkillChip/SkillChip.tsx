import {
  Skill,
  SKILL_TYPES_COLORS,
  SKILLS,
} from "@/components/SkillChip/constants";
import { Chip, ChipProps, styled, Theme } from "@mui/material";
import { get } from "lodash";
import Link from "next/link";

const StyledChip = styled(Chip)(
  ({
    theme,
    hovercolor,
  }: {
    theme?: Theme;
    hovercolor: ChipProps["color"];
  }) => ({
    margin: "3px",
    transition: "all 0.6s ease", // Smooth transition
    ":hover": {
      color: theme!.palette.common.white,
      // !important is needed to override any card styles
      borderColor: `${get(
        theme,
        `palette.${hovercolor}.light`,
        theme?.palette.grey[800]
      )} !important`,
      backgroundColor: `${get(
        theme,
        `palette.${hovercolor}.light`,
        theme?.palette.grey[800]
      )} !important`,
    },
  })
);

interface Props extends ChipProps {
  skill: Skill;
}
export default function SkillChip({ skill, ...rest }: Props) {
  const skill_type = get(SKILLS, skill, "default");
  const color = get(
    SKILL_TYPES_COLORS,
    skill_type,
    "default"
  ) as ChipProps["color"];

  return (
    <Link href={`/search?skill=${skill}`} passHref scroll={false}>
      <StyledChip
        color={color}
        label={skill}
        size="small"
        variant="outlined"
        hovercolor={color}
        {...rest}
      />
    </Link>
  );
}
