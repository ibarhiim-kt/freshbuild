import Image from "next/image";
import Header from "./Compnents/Header";
import Hero from "./Compnents/Hero";
import SectionTwo from "./Compnents/SectionTwo";
import SectionThree from "./Compnents/SectionThree";
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
    <div className="bg-[#F1F1F1]">   
    <div className="bg-[white]">   
    <Header/>
    </div>
    <div className="bg-custom-radial shadow-custom">
    <Hero/>
    </div>    
    <SectionTwo/> 
    {/* <SectionThree/> */}
    </div>
  )
}