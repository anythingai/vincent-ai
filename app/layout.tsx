import { Masthead } from "@/components/masthead";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { NextSessionProvider } from "@/components/session-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextSessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {/* @ts-expect-error Async Server Component */}
            <Masthead />
            {children}
          </ThemeProvider>
        </NextSessionProvider>
      </body>
    </html>
  );
}
