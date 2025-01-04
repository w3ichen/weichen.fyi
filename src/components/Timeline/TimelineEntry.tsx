import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { calcDuration } from "./common";
import { ListItemText, styled } from "@mui/material";
import TimelineCard from "./TimelineCard";
import { get, isString } from "lodash";
import { TimelineDetail } from "@/constants/timeline";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});
const DOT_SIZE = 80;
const SMALL_DOT_SIZE = 12; // Default small dot width
const LEFT_WIDTH_SM = "21vw"; // For small screens, force the width to be 20vw

const StyledTimelineDot = styled(TimelineDot)(({}) => ({
  overflow: "hidden",
  width: DOT_SIZE + "px",
  height: DOT_SIZE + "px",
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
    // For small screens, force the width
    maxWidth: LEFT_WIDTH_SM,
    width: LEFT_WIDTH_SM,
    minWidth: LEFT_WIDTH_SM,
    paddingRight: theme.spacing(1),
  },
}));
const Dash = styled("span")(({ theme }) => ({
  display: "inline",
  [theme.breakpoints.down("sm")]: {
    display: "none", // On small screens, hide the dash
  },
}));

export default function TimelineEntry(props: TimelineDetail) {
  const { startDate, endDate, company, logo } = props;

  // Calculate the date, and date range
  const start = dateFormatter.format(
    new Date(startDate.year, startDate.month - 1)
  );
  const end = isString(endDate)
    ? endDate
    : dateFormatter.format(new Date(endDate.year, endDate.month - 1));

  const duration = calcDuration(
    startDate.year,
    startDate.month,
    get(endDate, "year"),
    get(endDate, "month")
  );

  return (
    <TimelineItem>
      <OppositeContent variant="body2">
        <ListItemText
          primary={
            <>
              {start} <Dash>-</Dash> {end}
            </>
          }
          secondary={duration}
        />
      </OppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        {!!logo ? (
          <StyledTimelineDot>
            <img
              src={logo}
              alt={company}
              // -4px to make the image slightly smaller than the dot
              width={DOT_SIZE - 4 + "px"}
              height={DOT_SIZE - 4 + "px"}
            />
          </StyledTimelineDot>
        ) : (
          <TimelineDot sx={{ mx: (DOT_SIZE - SMALL_DOT_SIZE) / 2 + "px" }} />
        )}

        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", pl: { xs: 1, sm: 3 }, pr: 0 }}>
        <TimelineCard {...props} />
      </TimelineContent>
    </TimelineItem>
  );
}
