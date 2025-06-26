import localFont from "next/font/local";
import "../app/styles/globals.scss";
import Footer from "./components/footer";
import Header from "./components/header";

const nexa = localFont({
  src: [
    {
      path: "../app/fonts/Nexa-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/Nexa-Regular.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../app/fonts/Nexa-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../app/fonts/Nexa-XBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../app/fonts/Nexa-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-nexa",
});

export const metadata = {
  title: "NaijaSolve | Community-Powered Projects",
  description: "NaijaSolve helps Nigerians fund and solve local problems",
  keywords: [
    "NaijaSolve",
    "community",
    "Nigeria",
    "crowdfunding",
    "school fees",
    "water projects",
    "local impact",
    "CSM",
  ],
  authors: [{ name: "NaijaSolve Team", url: "https://naijasolve.ng" }],
  creator: "NaijaSolve",
  publisher: "NaijaSolve",
  metadataBase: new URL("https://naijasolve.ng"),
  openGraph: {
    title: "NaijaSolve | Community-Powered Projects",
    description:
      "Fund and fix real problems in your community with NaijaSolve.",
    url: "https://naijasolve.ng",
    siteName: "NaijaSolve",
    images: [
      {
        url: "https://naijasolve.ng/logo.png", // Replace this
        width: 1200,
        height: 630,
        alt: "NaijaSolve - Community Impact",
      },
    ],
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "NaijaSolve | Community-Powered Projects",
    description: "Fix your community's biggest issues—with real funding.",
    creator: "@NaijaSolve",
    images: ["https://naijasolve.ng/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nexa.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
