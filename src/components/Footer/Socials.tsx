import { GitHub, LinkedIn } from "@mui/icons-material";
import {
  IconButton,
  IconButtonProps,
  Stack,
  styled,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

interface SocialButtonProps extends IconButtonProps {
  href: string;
  target?: string;
  hovercolor: string;
}

const SocialButton = styled(({ ...props }: SocialButtonProps) => (
  <IconButton
    target="_blank"
    rel="noopener noreferrer"
    component="a"
    {...props}
  />
))(({ hovercolor }: { theme?: Theme; hovercolor: string }) => ({
  color: "inherit",
  transition: "color 0.5s ease",
  textDecoration: "none", // Remove underline for the link
  ":hover": {
    color: hovercolor,
  },
}));

export default function Socials() {
  const theme = useTheme();
  return (
    <Grid size={{ xs: 12, md: 5 }}>
      <Stack
        direction="column"
        spacing={2}
        textAlign="center"
        alignItems="center"
      >
        <Typography variant="h4" fontFamily="Georgia" fontWeight={1000}>
          weichen.fyi
        </Typography>
        <Stack direction="row" spacing={2}>
          <SocialButton
            hovercolor={theme.palette.linkedinBlue!.light!}
            href="https://www.linkedin.com/in/weichen-q"
          >
            <LinkedIn fontSize="large" />
          </SocialButton>
          <SocialButton
            hovercolor={theme.palette.githubBlack!.light!}
            href="https://github.com/w3ichen"
          >
            <GitHub fontSize="large" />
          </SocialButton>
        </Stack>
      </Stack>
    </Grid>
  );
}
