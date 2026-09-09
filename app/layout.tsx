import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-jump-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jump-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jump Performance | Marketing, Estratégia e Performance",
  description:
    "Estratégia, criatividade e dados conectados para marcas que querem transformar atenção em crescimento.",
  applicationName: "Jump Performance",
  keywords: ["marketing digital", "estratégia", "performance", "conteúdo", "mídia paga"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Jump Performance",
    title: "Jump Performance | Marketing, Estratégia e Performance",
    description:
      "Estratégia, criatividade e dados conectados para transformar atenção em crescimento.",
  },
  twitter: {
    card: "summary",
    title: "Jump Performance | Marketing, Estratégia e Performance",
    description:
      "Estratégia, criatividade e dados conectados para transformar atenção em crescimento.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  other: {
    "codex-preview": "development",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080010",
  colorScheme: "dark",
};

const designContract = `<!--
THESIS: Jump's work is a calibrated signal loop, not a dark agency page divided into generic service cards.
OWN-WORLD: Carbon and graphite matte fields, off-white compressed type, a solid lime calibration strip, an electric-blue plotted path, square specimen panes and hairline rails.
STORY: The visitor sees the movement mechanism, scans packages and work, opens case dossiers, learns the feedback loop and starts a WhatsApp conversation.
FIRST VIEWPORT: Compact navigation; an oversized three-line claim fills the left; a tall lime strip punctures center-right; the signal crosses the baseline; value copy and actions anchor the right.
FORM: Performance calibration worksheet, grounded candidate 5; seed bdc773b9.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body data-design-seed="bdc773b9">
        <template
          id="jump-design-contract"
          dangerouslySetInnerHTML={{ __html: designContract }}
        />
        {children}
      </body>
    </html>
  );
}
