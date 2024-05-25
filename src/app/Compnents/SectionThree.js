import React from "react";
export default function SectionThree(){
    return(
        <div className="max-w-[1440px]  m-[auto] pt-[114px] max-1220px:px-[10px]
        max-900px:max-w-[700px] max-900px:pt-[70px] max-700px:max-w-[550px] 
         max-700px:pt-[40px] max-490px:max-w-[400px] max-400px:max-w-[300px] 
         ">
            <div className="flex justify-between max-w-[1080px] 
            ml-[50px] max-1220px:flex-col max-1220px:items-center  
             max-1220px:m-[auto] " >
            <div className="relative max-1220px:flex max-1220px:flex-col
            max-1220px:items-center max-1220px:text-center">
                <h1 className="font-medium text-[26px] leading-[39px] tracking-[-0.4px]
                mt-[72px] ml-[122px] max-1220px:ml-[0] max-1220px:text-[44px]
                max-900px:text-[30px] max-700px:text-[27px] max-490px:text-[23px] 
                max-490px:mt-[50px] max-400px:mt-[30px] max-400px:text-[17px] max-400px:mt-[50px]">Find your new home on <span className="text-[#3E8180]">fresh<span className="font-normal">builds</span></span>.</h1>
                <p className="font-normal text-[16px] leading-[24px] tracking-[-0.2px] max-w-[454px] mt-[9px] mb-[37px] ml-[122px] max-1220px:ml-[0]              max-1220px:max-w-[750px] max-1220px:text-[20px] max-1220px:mt-[25px]
                leading-[28px] max-700px:text-[16px] max-490px:text-start max-490px:text-[14px] max-400px:text-[12px] max-400px:max-w-[320px] max-400px:mt-[8px]">freshbuilds has the largest inventory of new construction homes that you won’t find on other websites. Our proprietary technology and network of local real estate agents mean you’ll be the first to hear about new construction projects.</p>
                <button className="py-[15px] px-[28px] bg-[#E87F3F] max-w-[205px] font-bold text-base leading-[20.83px] text-[#FFFFFF] rounded-[5px] 
                ml-[122px] max-1220px:ml-[0] max-400px:px-[22px] 
                max-400px:py-[12px] max-400px:text-[13px]">Search freshbuilds</button>
                
                <img src="./images/section3img2.svg" alt="img" className="
                max-1220px:my-[20px] max-1220px:max-w-[400px] max-1220px:max-h-[400px] 
                max-400px:max-w-[250px] max-400px:max-h-[250px]"/>
                
            </div>
            <div className="w-[455px] h-[455px] bg-[#5CCAAB] rounded-[50%] flex
            justify-center max-490px:w-[380px] max-490px:h-[380px] 
            max-400px:max-w-[300px] max-400px:max-h-[300px] max-400px:mt-[60px]">
                <div className="shadow-custom3 relative ">
                <img src="./images/section3img1.svg" alt="img "
                 className="rounded-t-[10px] mt-[-15px] max-490px:max-w-[280px] 
                 max-490px:mt-[-30px] max-400px:max-w-[230px] max-400px:mt-[-50px] 
                 max-400px:h-[200px]"/>
                 <button className="rounded-[5px] max-w-[123px] font-normal text-[12px]   leading-[15.62px] text-[white] bg-[#E87F3F] px-[7px] py-[7px] absolute top-[14px] left-[17px] max-400px:top-[5px]">Listed 2 Hours Ago</button>
                <div className="bg-[white] max-w-[329px] pt-[12px] px-[20px] pb-[20px] rounded-b-[10px] max-490px:max-w-[280px] max-490px:max-h-[211px] 
                max-400px:max-w-[230px] ">
                    <h1 className="font-bold text-[16px] leading-[20.83px] 
                    max-w-[167px] max-400px:text-[13px] ">1294 Westleigh Drive</h1>
                    <div className="flex justify-between max-w-[167px] font-normal leading-[18.23px] text-[#686868] text-[14px] pt-[8px] max-400px:text-[12px]">
                        <h6>3 Bd</h6>
                        <p>2 Bth</p>
                        <p>1,524 Sq. ft</p>
                    </div>
                    <h1 className="font-bold text-[18px] leading-[23.44px] pt-[8px] 
                    max-400px:text-[14px]"> 
                    $445,000</h1>
                   
                    <div className="flex justify-between items-center text-[14px] leading-[18.23px] pt-[18px] max-490px:pt-[14px] max-400px:text-[12px] 
                    leading-[15px]">
                        <p className=" text-[#9B9B9B] font-normal">Completion Date</p>
                        <h1 className="font-bold ">09/27/2023</h1>
                    </div>
                    <div className="flex justify-between items-center font-normal 
                    text-[14px] leading-[18.23px] pt-[13px] max-400px:text-[12px] 
                    max-400px:leading-[15px]">
                        <p className="text-[#9B9B9B]">Neighborhood</p>
                        <p className="text-[white] bg-[#5CCAAB] p-[10px] rounded-[50%]
                        w-[28px] h-[28px] flex items-center justify-center">A-</p>
                    </div>
                    <div className="flex justify-between items-center font-normal 
                    text-[14px] leading-[18.23px] pt-[13px] max-400px:text-[12px] 
                    max-400px:leading-[15px]">
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