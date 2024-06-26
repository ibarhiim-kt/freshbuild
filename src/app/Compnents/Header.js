import React from "react";

export default function Header(){
    return(
        <div className="flex items-center justify-between py-[20px] px-[122px] m-[auto] max-w-[1440px] max-1280px:max-w-[1000px] max-1280px:px-[132px]
         max-900px:max-w-[700px] max-900px:px-[10px] max-700px:max-w-[550px]
         max-490px:max-w-[400px] max-400px:max-w-[300px]" >
            <div className="flex items-center">
            <img src="./images/logo.svg" alt="img" className="max-490px:h-[18px] 
            max-490px:w-[18px]  max-400px:h-[15px] max-400px:w-[15px]" />
            <p className="font-light text-[20px] leading-[27.32px] 
            text-[#3E8180] max-490px:text-[18px] max-400px:text-[16px]">fresh<span className="font-bold">builds</span></p>
            </div>           
            <p className="font-bold text-[16px] leading-[20.83px] items-center max-490px:text-[14px] max-400px:text-[12px]">1-844-769-6377</p>           
        </div>
    )
}