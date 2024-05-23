import React from "react";
export default function SectionThree(){
    return(
        <div className="max-w-[1440px]  m-[auto] pt-[114px] ">
            <div className="flex justify-center max-w-[1080px] m-[auto] 
            " >
            <div className="relative">
                <h1 className="font-medium text-[26px] leading-[39px] tracking-[-0.4px]
                mt-[72px]">Find your new home on <span className="
                text-[#3E8180]">fresh<span className="font-normal">builds</span></span>.</h1>
                <p className="font-normal text-[16px] leading-[24px] tracking-[-0.2px] max-w-[454px] mt-[9px] mb-[37px]">freshbuilds has the largest inventory of new construction homes that you won’t find on other websites. Our proprietary technology and network of local real estate agents mean you’ll be the first to hear about new construction projects.</p>
                <button className="py-[15px] px-[28px] bg-[#E87F3F] max-w-[205px] font-bold text-base leading-[20.83px] text-[#FFFFFF] rounded-[5px] 
                ">Search freshbuilds</button>
                
                <img src="./images/section3img2.svg" alt="img" className="
                ml-[-120px] "/>
                
            </div>
            <div className="w-[455px] h-[455px] bg-[#5CCAAB] rounded-[50%] flex
            justify-center ">
                <div className="shadow-custom3 relative">
                <img src="./images/section3img1.svg" alt="img "
                 className="rounded-t-[10px] mt-[-15px]"/>
                 <button className="rounded-[5px] max-w-[123px] font-normal text-[12px]   leading-[15.62px] text-[white] bg-[#E87F3F] px-[7px] py-[7px] absolute top-[14px] left-[17px]">Listed 2 Hours Ago</button>
                <div className="bg-[white] max-w-[329px] pt-[12px] px-[20px] pb-[20px] rounded-b-[10px] ">
                    <h1 className="font-bold text-[16px] leading-[20.83px] max-w-[167px]">1294 Westleigh Drive</h1>
                    <div className="flex justify-between max-w-[167px] font-normal leading-[18.23px] text-[#686868] text-[14px] pt-[8px]">
                        <h6 className="">3 Bd</h6>
                        <p>2 Bth</p>
                        <p>1,524 Sq. ft</p>
                    </div>
                    <h1 className="font-bold text-[18px] leading-[23.44px] pt-[8px]"> 
                    $445,000</h1>
                   
                    <div className="flex justify-between items-center text-[14px] leading-[18.23px] pt-[18px]">
                        <p className=" text-[#9B9B9B] font-normal">Completion Date</p>
                        <h1 className="font-bold ">09/27/2023</h1>
                    </div>
                    <div className="flex justify-between items-center font-normal 
                    text-[14px] leading-[18.23px] pt-[13px]">
                        <p className="text-[#9B9B9B]">Neighborhood</p>
                        <p className="text-[white] bg-[#5CCAAB] p-[10px] rounded-[50%]
                        w-[28px] h-[28px] flex items-center justify-center">A-</p>
                    </div>
                    <div className="flex justify-between items-center font-normal 
                    text-[14px] leading-[18.23px] pt-[13px]">
                        <p className=" text-[#9B9B9B]">Schools</p>
                        <p className="text-[white] bg-[#5CCAAB] p-[10px] rounded-[50%]
                        w-[28px] h-[28px] flex items-center justify-center">B+</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}