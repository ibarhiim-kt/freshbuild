import React from "react";
export default function SectionFour(){
    const boxes=[
        {
            img:'./images/condos.svg',
            para:'Condos',
        },
        {
            img:'./images/townhomes.svg',
            para:'Townhomes',
        },
        {
            img:'./images/luxuryhomes.svg',
            para:'Luxury Homes',
        },
        {
            img:'./images/familyhomes.svg',
            para:'Single Family Homes',
        },
        {
            img:'./images/communityhomes.svg',
            para:'55+ Community Homes',
        },
        {
            img:'./images/quickmove.svg',
            para:'Quick Move-In Homes',
        },
        {
            img:'./images/buildland.svg',
            para:'Ready To Build Land',
        },        
        {
            img:'./images/reannovated.svg',
            para:'Rennovated Homes',
        },
        
    ]
    return(
        <div className="max-w-[1440px] m-[auto] flex flex-col items-center 
        max-1220px:px-[10px] max-1220px:mt-[100px] max-900px:max-w-[700px] 
        max-700px:max-w-[550px] max-490px:max-w-[400px] max-400px:max-w-[300px]">
        <div className=" flex justify-center max-900px:flex-col max-400px:mt-[20px]">
            <div className="max-w-[468px] bg-[white] pt-[17px] px-[20px] pb-[21px] 
            rounded-[10px] mr-[35px] shadow-custom5 max-900px:mb-[30px] 
            max-900px:mr-[0] max-400px:">
                <img src="./images/section4stars.svg" alt="img" />
                <p className="font-normal text-[14px] leading-[22px] mt-[8.77px]  
                mb-[9px] max-400px:text-[10px] leading-[18px]">We bought our new home while we were still living in another state and needed to find a reputable builder. freshbuilds allowed us to find new homes that weren’t on other website and once we found one we liked, they managed the entire process for us.</p>
                <h1 className="font-bold text-[16px] leading-[20.83px] 
                 text-[#3E8180] max-400px:text-[13px] ">Steve & Julie S.</h1>
                <h1 className="font-semibold text-[12px] leading-[15.62px] max-400px:text-[10px]">New Homeowners</h1>
            </div>
            <div className="max-w-[468px] bg-[white] pt-[17px] px-[20px] pb-[21px] 
            rounded-[10px]">
                <img src="./images/section4stars.svg" alt="img" />
                <p className="font-normal text-[14px] leading-[22px] mt-[8.77px]  
                mb-[9px] max-400px:text-[10px] leading-[18px]">I was looking for a new construction home but all of the new homes on other websites were sold before I could make an offer. freshbuilds sent me an alert for a new home that was under construction and helped me write an offer on it!</p>
                <h1 className="font-bold text-[16px] leading-[20.83px] text-[#3E8180] 
                max-400px:text-[13px]">
                    Tod W.</h1>
                <h1 className="font-semibold text-[12px] leading-[15.62px] 
                max-400px:text-[10px]">New Homeowners</h1>
            </div>            
        </div>
        <h1 className="max-w-[648px] mt-[62px] font-medium text-[26px] leading-[39px] text-center tracking-[0.41%] max-700px:text-[22px] 
        max-700px:leading-[30px] max-490px:text-[17px] 
        max-400px:text-[13px]  max-400px:leading-[20px]">Whatever kind of new home you’re looking for, you’ll find it on <span className="text-[#3E8180]">fresh<span className="font-light">builds</span></span>.        
        </h1>
        <div className="grid grid-cols-4 gap-[25px] mt-[40px] max-1220px:grid-cols-3 
        max-900px:grid-cols-2 max-700px:grid-cols-1">
            {boxes.map((box)=>(
            <div className="flex rounded-[10px] w-[279px] items-center bg-[white] 
             py-[39px] shadow-custom4 justify-center">
                <img src={box.img} alt="img" className="mr-[11.92px]"/>
                <h1 className="font-normal text-[16px] leading-[20.83px] max-400px:text-[13px]">{box.para}</h1>
            </div>
            ))}
        </div>
        <button className="py-[18px] text-[16px] mt-[34px] px-[28px] bg-[#E87F3F] max-w-[205px] font-bold text-base leading-[20.83px] text-[#FFFFFF] rounded-[5px] 
        mb-[64px]  max-700px:px-[26px] max-700px:py-[13px] max-700px:text-[14px] 
            max-490px:px-[24px] max-490px:py-[11px] max-490px:text-[12px] max-400px:px-[22px] max-400px:py-[9px] max-400px:text-[10px]">Search freshbuilds</button>
        </div>
    )
}