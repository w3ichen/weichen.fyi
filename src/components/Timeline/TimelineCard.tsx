import { TimelineDetail } from "@/components/Page/PageContext";
import { UnfoldMore } from "@mui/icons-material";
import { CardActions, Stack, styled } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import SkillChip from "../SkillChip/SkillChip";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  width: "fit-content",
  borderRadius: "20px",
  border: `2px solid ${theme.palette.divider}`,
  transition: "box-shadow border 0.5s ease", // Smooth transition
  // Apply styles to the chip
  ".MuiChip-outlined": {
    transition: "all 0.7s ease", // Smooth transition
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
  url,
}: TimelineDetail) {
  return (
    <StyledCard variant="outlined">
      <CardActionArea>
        <Link href={url} passHref style={{ color: "inherit" }}>
          <CardContent sx={{ pb: "5px !important" }}>
            <Typography variant="subtitle1" fontWeight={500}>
              {position}
            </Typography>
            <Typography variant="subtitle2">{company}</Typography>
            <Typography variant="caption">{location}</Typography>
          </CardContent>
        </Link>

        <CardActions sx={{ mt: 0, pt: 0 }}>
          <Stack direction="row" width="100%" flexWrap="wrap">
            {skills.map((skill, i) => (
              <SkillChip key={`skill-${i}`} skill={skill} />
            ))}
            <UnfoldMore color="action" sx={{ ml: "auto" }} />
          </Stack>
        </CardActions>
      </CardActionArea>
    </StyledCard>
  );
}
