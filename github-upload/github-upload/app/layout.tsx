import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["400", "500"] });

export const viewport: Viewport = { themeColor: "#060b14", colorScheme: "dark" };

export const metadata: Metadata = {
  title: "NEXSHIELD Technologies — Security you can prove",
  description:
    "NEXSHIELD Technologies is a cybersecurity firm with twelve practices across advisory, technology and managed services: GRC and audits, SOC and MDR, identity, cloud, OT, privacy and AI security.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable} antialiased`}>
      <body>
        <noscript>
          <style>{`.preloader{display:none}`}</style>
        </noscript>
        <a href="#main" className="skip">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
