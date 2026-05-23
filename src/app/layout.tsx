import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Dr. Bhupen Hazarika Regional Government Film & Television Institute",
  description:
    "Official website of Dr. Bhupen Hazarika Regional Government Film & Television Institute — Nurturing creative talent in film, television, and media arts.",
  keywords: "film institute, television institute, Bhupen Hazarika, media arts, Assam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
