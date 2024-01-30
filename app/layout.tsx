import { Navbar } from "../components/Navbar";
import Head from "next/head";
import "../styles/globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import Footer from "../components/Footer";
import Link from "next/link";
import favicon from "../public/favicon/favicon.ico"

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Site" key="title" />
        <title>Alex Zhao</title>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
      </head>
      <body>
        <Navbar />
        {children}
        <GoogleAnalytics gaId="G-WTW0D38B14" />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
