import FastfoodIcon from "@mui/icons-material/Fastfood";
import HotelIcon from "@mui/icons-material/Hotel";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import MuiTimeline from "@mui/lab/Timeline";
import TimelineEntry from "./TimelineEntry";

export default function Timeline() {
  return (
    <MuiTimeline position="alternate" sx={{ mt: 1, mb: 5 }}>
      <TimelineEntry
        leftText="9:30am"
        rightText="Eat because you need strength"
        icon={<FastfoodIcon />}
      />
      <TimelineEntry
        leftText="10:00 am"
        rightText="Code because it's awesome!"
        icon={<LaptopMacIcon />}
      />
      <TimelineEntry
        leftText="12:00 pm"
        rightText="Sleep because you need rest"
        icon={<HotelIcon />}
      />
    </MuiTimeline>
  );
}
