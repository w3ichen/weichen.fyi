import { ElectricBolt } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Footnote() {
  return (
    <Grid size={12} textAlign="center" mt={2}>
      <ElectricBolt fontSize="small" />
      <Typography variant="body2">
        {"© "}
        {new Date().getFullYear()} Weichen Qiu. All rights reserved.
      </Typography>
      <Typography variant="overline" textAlign="center">
        Life in progress ~ More to come!
      </Typography>
    </Grid>
  );
}
