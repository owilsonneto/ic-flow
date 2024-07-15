import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from '@/lib/utils';
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = Poppins({ weight: ['400', '500', '600'], variable: '--font-sans', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IC-Flow",
  description: "Organizando a bagunça.",
  icons: {
    icon: '/icons/iclogo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
