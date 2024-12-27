import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import "./globals.css";
import { theme } from "../constants/theme";

export const metadata: Metadata = {
  title: "Weichen Qiu",
  description: "Weichen Qiu's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body>
          <CssBaseline />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
