import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./(components)/ui/Header";
import Footer from "./(components)/ui/Footer";
import { ThemeProvider } from "./(components)/ui/ThemeProvider";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "The Fruit Bowl & Co. - Freshly Blended Goodness",
  description: "Discover our delicious range of smoothies, juices, and fruit bowls made with natural ingredients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
        CRITICAL CHANGE:
        - bg-white dark:bg-black: Sets the base colors as requested.
        - transition-colors duration-500: Makes the background color fade smoothly over 500ms when the theme changes.
      */}
      <body className={`${poppins.className} bg-white dark:bg-black text-black dark:text-white transition-colors duration-500`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}