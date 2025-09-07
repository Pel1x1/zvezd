import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {PromoSection} from "./components/PromoSection";
const inter = Inter({ subsets: ["latin", "cyrillic"] });
import Script from 'next/script';
import TravellineLoader from '@/app/components/TravellineLoader';

export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="ru" className="bg-black">
      
      <body className={inter.className} style={{background: "black"}} >
        
        
        <Header/>
        <div id="tl-search-form" className='w-[100%] bg-[#ffffff] border-white py-2 px-4 mt-13 fixed z-10000'></div>
        <TravellineLoader />
        {children}   
        <PromoSection/>
        <Footer/>
      </body>
    </html>
  );
}
