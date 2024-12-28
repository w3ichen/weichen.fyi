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
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        <ListItemText primary={`${start} - ${end}`} secondary={duration} />
      </TimelineOppositeContent>
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
      <TimelineContent sx={{ py: "12px", px: 3 }}>
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
