import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { ListItemText, styled, Typography } from "@mui/material";
import { ReactNode } from "react";
import { calcDuration } from "../Timeline/common";
import { get, isString } from "lodash";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

const LEFT_WIDTH_SM = "25vw"; // For small screens, force the width to be 25vw

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

export interface TimelineListItemProp {
  primary: string | ReactNode;
  secondary?: string | ReactNode;
  startDate: { year: number; month: number };
  endDate: { year: number; month: number } | "Present";
}

export default function TimelineListItem(props: TimelineListItemProp) {
  const { startDate, endDate, primary, secondary } = props;

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
      <OppositeContent sx={{ py: 0, my: 0 }}>
        <ListItemText primary={`${start} - ${end}`} secondary={duration} />
      </OppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ pl: { xs: 1, sm: 3 }, pr: 0 }}>
        <Typography variant="body1" color="textPrimary">
          {primary}
        </Typography>
        {!!secondary && (
          <Typography variant="body2" color="textSecondary">
            {secondary}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
}
