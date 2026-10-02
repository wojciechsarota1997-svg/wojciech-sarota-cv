import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/content/site";
import "./globals.css";

// Jedna czcionka na całą stronę; oś wdth daje szerokie nagłówki
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  display: "swap",
});

const title = "Wojciech Sarota, Senior Software Engineer (Java, Spring Boot)";
const description =
  "CV of Wojciech Sarota, Senior Software Engineer from Kraków with 6+ years in fintech. Java, Spring Boot microservices, OAuth2, Python and FastAPI.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
