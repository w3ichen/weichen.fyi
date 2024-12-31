import { Stack, StackProps, styled, Typography } from "@mui/material";

const StyledImage = styled("img")(({ theme }) => ({
  height: "50px",
  [theme.breakpoints.down("md")]: {
    margin: "auto",
  },
}));

interface Props extends StackProps {
  title: string;
  imgSrc: string;
}
export default function TitleWithLogo({ title, imgSrc, ...rest }: Props) {
  return (
    <Stack
      direction="row"
      alignItems="flex-end"
      justifyContent="space-between"
      flexWrap="wrap"
      mb={2}
      {...rest}
    >
      <Typography variant="h4">{title}</Typography>
      <StyledImage src={imgSrc} alt="Logo" />
    </Stack>
  );
}
