/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client";

import { createTheme, SimplePaletteColorOptions } from "@mui/material";

// Type definitions for custom theming /////////////////////////////////////////
// Custom colors: https://stackoverflow.com/a/69836010/21167368
declare module "@mui/material/styles" {
  interface TypeBackground {
    footer?: string; // Add the custom property
  }
  interface TypeText {
    footer?: string;
  }
  interface CustomPalette {
    background?: Partial<TypeBackground>;
    text?: Partial<TypeText>;
    githubBlack?: SimplePaletteColorOptions;
    linkedinBlue?: SimplePaletteColorOptions;
    youtubeRed?: SimplePaletteColorOptions;
    instagramPink?: SimplePaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    githubBlack: true;
    linkedinBlue: true;
    youtubeRed: true;
    instagramPink: true;
  }
}
///////////////////////////////////////////////////////////////////////////////

export let theme = createTheme({});
export const createColor = (mainColor: string): SimplePaletteColorOptions =>
  // Generates light, dark, contrastText from main color: https://mui.com/material-ui/customization/palette/#generate-tokens-using-augmentcolor-utility
  theme.palette.augmentColor({
    color: { main: mainColor },
  });
theme = createTheme({
  palette: {
    mode: "light",
    primary: createColor("#C41230"),
    background: {
      footer: "#000000", // black
    },
    text: {
      footer: "#ffffff", // white
    },
    githubBlack: createColor("#171515"),
    linkedinBlue: createColor("#0072b1"),
    youtubeRed: createColor("#FF0000"),
    instagramPink: createColor("#c13584"),
  },
  typography: {
    fontFamily: "Helvetica, Arial, sans-serif",
  },
});
