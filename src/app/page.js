import Image from "next/image";
import Header from "./Compnents/Header";
import Hero from "./Compnents/Hero";
import SectionTwo from "./Compnents/SectionTwo";
import SectionThree from "./Compnents/SectionThree";
import SectionFour from "./Compnents/SectionFour";
import SectionFive from "./Compnents/SectionFive";
import Footer from "./Compnents/Footer";
// import localFont from 'next/font/local';
export default function Home() {
  // const myFont = localFont({
  //       src:[
  //         {
  //         path:'./fonts/AvenirLTStd-Black.otf',
  //         }
  //       ]
  // })
  return (
    <div>
    <div className="bg-[#F1F1F1]">   
    <div className="bg-[white]">   
    <Header/>
    </div>
    <div className="bg-custom-radial shadow-custom">
    <Hero/>
    </div>    
    <SectionTwo/> 
    <SectionThree/>
    <SectionFour/>
    </div>
    <SectionFive/>
    <div className="bg-[#322C4E]">
    <Footer/>
    </div>
    </div>
  )
}