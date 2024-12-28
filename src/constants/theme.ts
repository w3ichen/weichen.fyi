"use client";

import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypeBackground {
    footer?: string; // Add the custom property
  }
  interface TypeText {
    footer?: string;
  }
  interface Palette {
    background: TypeBackground;
    text: TypeText;
  }
  interface PaletteOptions {
    background?: Partial<TypeBackground>;
    text?: Partial<TypeText>;
  }
}

export const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      footer: "#000000", // black
    },
    text: {
      footer: "#ffffff", // white
    },
  },
  typography: {
    fontFamily: "Helvetica, Arial, sans-serif",
  },
});
