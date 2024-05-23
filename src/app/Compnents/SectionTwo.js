import React from "react";
export default function SectionTwo(){
    return(
        <div className="max-w-[1440px] m-[auto] pt-14 relative">
            <div className="flex testfont flex-col items-center ">
            <h1 className="leading-[39px] text-[26px] font-medium max-w-[540px]">
            Buying a new home is daunting. <br />
            <span className="text-[#3E8180]">fresh<span className="font-normal">builds</span></span> makes it oh-so easy.
            </h1>
            <div className="flex items-center max-w-[305px] bg-[white] rounded-[5px] px-[16px] py-[8px] absolute right-[72px] top-[20px] shadow-custom2">
                <img src="./images/section2img1.svg" alt="img" className="mr-2"/>
                <p className="font-normal text-[16px] leading-[20.83px] 
                 text-[#322C4E]">John S. just closed on a new home with freshbuilds!</p>
            </div>
            
            <div className="grid grid-cols-3 mt-[54px]">
            <div className="max-w-[365px] rounded-[10px] border-2 border-solid border-[#5CCAAB] px-[25px] pt-[52px] bg-[white] mr-[24px]">
                <img src="./images/section2img2.svg" alt="img" /> 
                <div>
                    <h1 className="font-extrabold text-[22px] leading-[26.4px] 
                    text-[#3E8180] mt-[43.37px] mb-[7px]">Get your time back</h1>
                    <p className="font-normal text-[16px] leading-[24px] 
                    tracking-[-0.4px] text-[#0E1532] max-w-[315px] pb-[20px]">Spend time with family, not searching dozens of listing sites. freshbuilds has all the new construction homes in one place.</p>
                </div>
            </div>
            <div className="max-w-[365px] rounded-[10px] px-[25px] pt-[52px] bg-[white]
             mr-[24px]">
                <img src="./images/section2img3.svg" alt="img" /> 
                <div>
                    <h1 className="font-extrabold text-[22px] leading-[26.4px] 
                    text-[#3E8180] mt-[43.37px] mb-[7px]">Be a know-it-all</h1>
                    <p className="font-normal text-[16px] leading-[24px] 
                    tracking-[-0.4px] text-[#0E1532] max-w-[315px] pb-[20px]">We monitor local construction activity and send you alerts when a new home with your criteria is ready for its new owners.</p>
                </div>
            </div>
            
            <div className="max-w-[365px]  relative">
            <img src="./images/section2img4.svg" alt="img" className="absolute
             top-[-75px] left-[0]"  />
            </div>
            </div>
            </div>
            <div className="flex mt-[31px] ml-[210px]">
            <div className="max-w-[365px] rounded-[10px] px-[25px] pt-[52px] bg-[white]
             mr-[24px]">
                <img src="./images/section2img5.svg" alt="img" /> 
                <div>
                    <h1 className="font-extrabold text-[22px] leading-[26.4px] 
                    text-[#3E8180] mt-[43.37px] mb-[7px]">Rely on experts</h1>
                    <p className="font-normal text-[16px] leading-[24px] 
                    tracking-[-0.4px] text-[#0E1532] max-w-[315px] pb-[20px]">Our licensed, new construction experts are by your side every step of the way and are available 7AM to 7PM – 7 days a week.</p>
                </div>
            </div>
            <div className="max-w-[365px] rounded-[10px] px-[25px] pt-[52px] bg-[white]">
        
                <img src="./images/section2img5.svg" alt="img" /> 
                <div>
                    <h1 className="font-extrabold text-[22px] leading-[26.4px] 
                    text-[#3E8180] mt-[43.37px] mb-[7px]">Rest assured</h1>
                    <p className="font-normal text-[16px] leading-[24px] 
                    tracking-[-0.4px] text-[#0E1532] max-w-[315px] pb-[20px]">
                        Every freshbuild purchase comes with a complimentary home warranty giving you one less thing to worry about.
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}