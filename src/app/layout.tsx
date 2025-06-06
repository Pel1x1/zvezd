import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {PromoSection} from "./components/PromoSection";
const inter = Inter({ subsets: ["latin", "cyrillic"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="bg-black">
      <body className={inter.className} style={{background: "black"}} >
        <Header/>
        {children}
        <PromoSection/>
        <Footer/>
      </body>
    </html>
  );
}
