import { TimelineDetail } from "@/constants/PageContext";
import { SKILL_TYPES_COLORS, SKILLS } from "@/constants/skills";
import { CardActions, Chip, ChipProps, styled } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { get } from "lodash";

interface Props {
  company: TimelineDetail["company"];
  position: TimelineDetail["position"];
  location: TimelineDetail["location"];
  skills: TimelineDetail["skills"];
}

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  width: "fit-content",
  borderRadius: "20px",
  border: `2px solid ${theme.palette.divider}`,
  transition: theme.transitions.create(["box-shadow", "border"], {
    duration: 0.5,
  }),

  // Apply styles to the chip
  ".MuiChip-outlined": {
    transition: "all 0.5s ease", // Smooth transition
  },

  // On hover effect for card and chip
  ":hover": {
    boxShadow: theme.shadows[10],
    border: `2px solid ${theme.palette.primary.main}`,
    ".MuiChip-outlined": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function TimelineCard({
  company,
  position,
  location,
  skills,
}: Props) {
  return (
    <StyledCard variant="outlined">
      <CardActionArea>
        <CardContent>
          <Typography variant="subtitle1" fontWeight={500}>
            {position}
          </Typography>
          <Typography variant="subtitle2">{company}</Typography>
          <Typography variant="caption">{location}</Typography>
        </CardContent>
        <CardActions sx={{ mt: 0, pt: 0 }}>
          {skills.map((skill, i) => {
            const skill_type = get(SKILLS, skill, "default");
            const color = get(
              SKILL_TYPES_COLORS,
              skill_type,
              "default"
            ) as ChipProps["color"];
            return (
              <Chip
                key={`skill-${skill}-${i}`}
                label={skill}
                size="small"
                variant="outlined"
                color={color}
              />
            );
          })}
        </CardActions>
      </CardActionArea>
    </StyledCard>
  );
}
