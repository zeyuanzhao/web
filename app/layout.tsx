import { Navbar } from "../components/Navbar";
import Head from "next/head";
import "../styles/globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Site" key="title" />
        <GoogleAnalytics gaId="G-WTW0D38B14"/>
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
