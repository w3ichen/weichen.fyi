import { LinearProgress, styled } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Socials from "./Socials";
import Footnote from "./Footnote";
import Quote from "./Quote";

const Root = styled("footer")(({ theme }) => ({
  color: theme.palette.text.footer,
  backgroundColor: theme.palette.background.footer,
  minHeight: "100px",
  borderRadius: "20px 20px 0 0",
  padding: "30px",
}));

export default function Footer() {
  return (
    <>
      <Root>
        <Grid
          container
          spacing={1}
          direction={{ xs: "column-reverse", md: "row" }}
        >
          <Quote />
          <Socials />
        </Grid>
        <Footnote />
      </Root>
      <LinearProgress color="secondary" sx={{ width: "100%" }} />
    </>
  );
}
