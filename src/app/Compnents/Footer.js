import React from "react";
export default function Footer(){
    return(
        <div className="max-w-[1440px] m-[auto] pt-[51px] pb-[15.49px] max-1220px:px-[10px] max-900px:max-w-[700px] max-700px:max-w-[550px] max-490px:max-w-[400px] 
        max-400px:max-w-[300px]">
            <div className="mb-[45px] flex flex-col items-center max-490px:mb-[30px]"> 
            <div className="flex mb-[16px] items-center">
            <img src="./images/footerimg1.svg" alt="img" className="max-490px:h-[19px] 
            max-490px:w-[19px]  max-400px:h-[19px] max-400px:w-[19px] mr-[3.98px]" />
            <p className=".font-extralight text-[20px] leading-[27.32px] 
            text-[white] max-490px:text-[16px] max-400px:text-[15px]">fresh<span className="font-bold">builds</span></p>
            </div>
            <p className="text-[white] pb-[8px] font-normal 
            text-[16px] leading-[20.83px] font-extralight max-490px:text-[13px]">contact@freshbuilds.com</p>      
            <p className="text-[white] font-normal text-[16px] 
            leading-[20.83px] font-extralight max-490px:text-[13px]">1-844-769-6377</p>
            </div>
            <div className="flex justify-between pr-[50px] pl-[50px] items-center 
            max-700px:flex-col-reverse max-700px:pr-[0px] max-700px:pl-[0px]">
                <div className="flex ">
                    <a href="" className="text-[white] font-normal text-[14px] 
                    leading-[18.23px] mr-[24px] font-extralight max-700px:text-[11px] 
                    max-490px:text-[9px] max-400px:text-[7px]">Privacy Policy</a>
                    <a href="" className="text-[white] font-normal text-[14px] 
                    leading-[18.23px] mr-[25px] font-extralight 
                    max-700px:text-[11px] max-490px:text-[9px] max-400px:text-[7px]">Terms of Service</a>
                    <p className="text-[white] font-normal text-[14px] 
                    leading-[18.23px] font-extralight max-700px:text-[11px] 
                    max-490px:text-[9px] max-400px:text-[7px]">Copyright &copy; 2022. All Rights Reserved</p>
                </div>
                <img src="./images/footerimg2.svg" alt="img" className="max-700px:mb-[20px]"/>
            </div>
        </div>
    )
}