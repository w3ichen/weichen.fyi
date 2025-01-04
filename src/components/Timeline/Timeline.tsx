import MuiTimeline from "@mui/lab/Timeline";
import TimelineEntry from "./TimelineEntry";
import { TimelineDetail } from "@/constants/timeline";

interface Props {
  details: TimelineDetail[];
}
export default function Timeline({ details }: Props) {
  return (
    <MuiTimeline position="right" sx={{ mt: 1, mb: 6, p: 0, width: "100%" }}>
      {details.map((detail, i) => (
        <TimelineEntry key={`timeline-entry-${i}`} {...detail} />
      ))}
    </MuiTimeline>
  );
}
