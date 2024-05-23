import React from "react";

export default function Hero(){
    
    return(
        <div className="relative max-w-[1440px] m-[auto] max-1280px:max-w-[1000px] 
        max-1280px:px-[10px] max-900px:max-w-[700px] max-700px:max-w-[550px] 
        max-490px:max-w-[400px] ">
        <img src="./images/heroHouse.svg" alt="" className="absolute top-[42px] 
        max-1280px:hidden max-1220px:hidden" />
        <div className="flex flex-col items-center ">
            <h1 className="max-w-[747px]  font-extrabold text-[42px] leading-[50.4px] text-center mt-[67px] text-[#3E8180] max-900px:text-[38px] 
            max-900px:max-w-[700px] max-700px:text-[27px] max-700px:leading-[40px] 
            max-700px:mt-[50px] max-490px:text-[20px] max-490px:leading-[30px]">Discover New Construction Homes Before They Hit The Market</h1>
            <p className="max-w-[580px] font-medium text-[20px] leading-[26.04px] text-center mt-[17px] mb-[23px] text-[black] max-900px:max-w-[530px]
            max-900px:text-[18px] max-700px:text-[14px] max-700px:max-w-[400px]
            max-700px:mt-[14px] max-700px:mb-[20px] max-700px:leading-[22px] 
            max-490px:text-[12px] max-490px:max-w-[320px]">From move-in-ready to custom homes,<span className="font-normal text-[24px] leading-[32.78px] max-900px:text-[22px] max-700px:text-[18px] max-700px:leading-[26px]
            max-490px:text-[15px]">fresh<span className="font-extrabold">builds</span></span> is the modern way to find + buy a new construction house.</p>
            <button className="py-[15px] text-[16px] px-[28px] bg-[#E87F3F] max-w-[205px] font-bold text-base leading-[20.83px] text-[#FFFFFF] rounded-[5px] mb-[38px]
            max-700px:px-[26px] max-700px:py-[13px] max-700px:text-[14px] 
            max-490px:px-[24px] max-490px:py-[11px] max-490px:text-[12px]">Search freshbuilds</button>
        </div>
        </div>
    )
}