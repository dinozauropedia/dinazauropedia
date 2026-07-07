import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Dinozauropedia.pl — portal o dinozaurach i prehistorii",
  description:
    "Dinozauropedia.pl to portal o dinozaurach, paleontologii, prehistorii, odkryciach naukowych i e-bookach edukacyjnych.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}