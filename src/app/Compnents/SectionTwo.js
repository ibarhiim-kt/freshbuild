import React from "react";
export default function SectionTwo(){
    return(
        <div className="max-w-[1440px] m-[auto] pt-14 relative  max-1220px:px-[10px] max-900px:max-w-[700px] max-700px:max-w-[550px] max-490px:max-w-[400px] 
        max-400px:max-w-[300px]">
            <div className="flex  flex-col items-center ">
            <h1 className="leading-[39px] text-[26px] font-medium max-w-[540px]
            max-900px:text-[43px] max-900px:max-w-[1000px] max-900px:leading-[60px]
             max-700px:text-[26px] max-700px:max-w-[540px] max-700px:leading-[35px]
             max-490px:text-[22px] max-400px:text-[18px] max-400px:leading-[28px]">
            Buying a new home is daunting. <br />
            <span className="text-[#3E8180]">fresh<span className="font-light">builds</span></span> makes it oh-so easy.
            </h1>
            <div className="flex items-center max-w-[305px] bg-[white] rounded-[5px] px-[16px] py-[8px] absolute right-[72px] top-[20px] shadow-custom2
            max-1220px:static max-1220px:mt-[10px]">
                <img src="./images/section2img1.svg" alt="img" className="mr-2"/>
                <p className="font-normal text-[16px] leading-[20.83px] 
                 text-[#322C4E] max-400px:text-[13px]">John S. just closed on a new home with freshbuilds!</p>
            </div>
            
            <div className="grid grid-cols-3 mt-[54px] max-1220px:grid-cols-2 max-1220px:pl-[30px] max-900px:grid-cols-1 max-900px:pl-[0]">
            <div className="max-w-[365px] rounded-[10px] border-2 border-solid border-[#5CCAAB] px-[25px] pt-[52px] bg-[white] mr-[24px] max-900px:mb-[20px] max-900px:mr-[0]">
                <img src="./images/section2img2.svg" alt="img" /> 
                <div>
                    <h1 className="font-extrabold text-[22px] leading-[26.4px] 
                    text-[#3E8180] mt-[43.37px] mb-[7px] max-490px:text-[20px] 
                    max-400px:text-[17px]">Get your time back</h1>
                    <p className="font-normal text-[16px] leading-[24px] 
                    tracking-[-0.4px] text-[#0E1532] max-w-[315px] pb-[20px] max-490px:text-[13px] max-400px:text-[10px]">Spend time with family, not searching dozens of listing sites. freshbuilds has all the new construction homes in one place.</p>
                </div>
            </div>
            <div className="max-w-[365px] rounded-[10px] px-[25px] pt-[52px] bg-[white]
             mr-[24px] max-1220px:mr-[0px] max-900px:mb-[20px]">
                <img src="./images/section2img3.svg" alt="img" /> 
                <div>
                    <h1 className="font-extrabold text-[22px] leading-[26.4px] 
                    text-[#3E8180] mt-[43.37px] mb-[7px] max-490px:text-[20px] 
                    max-400px:text-[17px]">Be a know-it-all</h1>
                    <p className="font-normal text-[16px] leading-[24px] 
                    tracking-[-0.4px] text-[#0E1532] max-w-[315px] pb-[20px] max-490px:text-[13px] max-400px:text-[10px]">We monitor local construction activity and send you alerts when a new home with your criteria is ready for its new owners.</p>
                </div>
            </div>
            
            <div className="max-w-[365px]  relative 
            max-1220px:max-w-[365px] max-1220px:h-[365px] max-400px:h-[250px]">
            <img src="./images/section2img4.svg" alt="img" className="absolute
             top-[-75px] left-[0] max-1220px:top-[50px] max-1220px:left-[200px]
             max-900px:static"/>
            </div>
            </div>
            </div>
            <div className="flex mt-[31px] ml-[210px] max-1220px:ml-[0px] max-1220px:justify-center max-900px:flex-col max-900px:items-center
            max-900px:mt-[0]">
            <div className="max-w-[365px] rounded-[10px] px-[25px] pt-[52px] bg-[white]
             mr-[24px] max-900px:mr-[0] max-900px:mb-[20px]">
                <img src="./images/section2img5.svg" alt="img" /> 
                <div>
                    <h1 className="font-extrabold text-[22px] leading-[26.4px] 
                    text-[#3E8180] mt-[43.37px] mb-[7px] max-490px:text-[20px] 
                    max-400px:text-[17px]">Rely on experts</h1>
                    <p className="font-normal text-[16px] leading-[24px] 
                    tracking-[-0.4px] text-[#0E1532] max-w-[315px] pb-[20px] max-490px:text-[13px] max-400px:text-[10px]">Our licensed, new construction experts are by your side every step of the way and are available 7AM to 7PM – 7 days a week.</p>
                </div>
            </div>
            <div className="max-w-[365px] rounded-[10px] px-[25px] pt-[52px] bg-[white]">
        
                <img src="./images/section2img5.svg" alt="img" /> 
                <div>
                    <h1 className="font-extrabold text-[22px] leading-[26.4px] 
                    text-[#3E8180] mt-[43.37px] mb-[7px] max-490px:text-[20px] 
                    max-400px:text-[17px]">Rest assured</h1>
                    <p className="font-normal text-[16px] leading-[24px] 
                    tracking-[-0.4px] text-[#0E1532] max-w-[315px] pb-[20px] max-490px:text-[13px] max-400px:text-[10px]">
                        Every freshbuild purchase comes with a complimentary home warranty giving you one less thing to worry about.
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}