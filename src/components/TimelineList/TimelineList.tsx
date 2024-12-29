import MuiTimeline from "@mui/lab/Timeline";
import TimelineListItem, { TimelineListItemProp } from "./TimelineListItem";

interface Props {
  items: TimelineListItemProp[];
}
export default function TimelineList({ items }: Props) {
  return (
    <MuiTimeline position="right" sx={{ mt: 1, mb: 1, p: 0 }}>
      {items.map((item, i) => (
        <TimelineListItem key={`timeline-item-${i}`} {...item} />
      ))}
    </MuiTimeline>
  );
}
