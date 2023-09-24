import { Navbar } from "../components/Navbar"
import Head from 'next/head'
import '../styles/globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Site" key="title" />
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
