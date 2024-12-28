import { TimelineDetail } from "@/constants/PageContext";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { calcDuration } from "./common";
import { ListItemText, styled } from "@mui/material";
import TimelineCard from "./TimelineCard";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});
const LOGO_SIZE = 80;

const StyledTimelineDot = styled(TimelineDot)(({}) => ({
  overflow: "hidden",
  width: LOGO_SIZE + "px",
  height: LOGO_SIZE + "px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const OppositeContent = styled(TimelineOppositeContent)(({ theme }) => ({
  margin: "auto 0",
  paddingRight: theme.spacing(3),
  paddingLeft: 0,
  textAlign: "right",
  color: theme.palette.text.secondary,
  [theme.breakpoints.down("sm")]: {
    // For small screens, force the width to be 20vw
    maxWidth: "20vw",
    width: "20vw",
    minWidth: "20vw",
    paddingRight: theme.spacing(1),
  },
}));

export default function TimelineEntry({
  startDate,
  endDate,
  company,
  position,
  logo,
  location,
  skills,
}: TimelineDetail) {
  // Calculate the date, and date range
  const start = dateFormatter.format(
    new Date(startDate.year, startDate.month - 1)
  );
  const end = endDate
    ? dateFormatter.format(new Date(endDate.year, endDate.month - 1))
    : "Present";
  const duration = calcDuration(
    startDate.year,
    startDate.month,
    endDate?.year,
    endDate?.month
  );

  return (
    <TimelineItem>
      <OppositeContent variant="body2">
        <ListItemText primary={`${start} - ${end}`} secondary={duration} />
      </OppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <StyledTimelineDot>
          <img
            src={logo}
            alt={company}
            width={LOGO_SIZE - 4 + "px"}
            height={LOGO_SIZE - 4 + "px"}
          />
        </StyledTimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", pl: { xs: 1, sm: 3 }, pr: 0 }}>
        <TimelineCard
          company={company}
          position={position}
          location={location}
          skills={skills}
        />
      </TimelineContent>
    </TimelineItem>
  );
}
