import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import { theme } from "../constants/theme";
import "./globals.css";
import PageBase from "@/components/Page/PageBase";
import ogImage from "../../public/ogImage.jpg";

export const metadata: Metadata = {
  title: "Weichen Qiu",
  description:
    "Weichen's Portfolio | Roboticist | Entrepreneur | SWE | Student | Creator",
  metadataBase: new URL("https://weichen.fyi"),
  authors: [{ name: "Weichen Qiu", url: "https://weichen.fyi" }],
  keywords: [
    "Weichen Qiu",
    "Weichen",
    "Qiu",
    "w3ichen",
    "Portfolio",
    "Projects",
    "Resume",
    "CV",
    "Climate Tech",
    "Roboticist",
    "Entrepreneur",
    "SWE",
    "Software Engineer",
    "Student",
    "Creator",
  ],
  openGraph: {
    type: "website",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  robots: "index, follow", // Allow search engines to index the page
  alternates: {
    canonical: "https://weichen.fyi", // Preferred URL for SEO
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script id="ga-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
            `}
        </Script>
        <Script id="hotjar-analytics" strategy="lazyOnload">
          {`
              (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
        </Script>
        {/* Suspense needed for useSearchParams to work: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout */}
        <Suspense fallback={null}>
          <body>
            <CssBaseline />
            <PageBase>{children}</PageBase>
          </body>
        </Suspense>
      </html>
    </ThemeProvider>
  );
}
