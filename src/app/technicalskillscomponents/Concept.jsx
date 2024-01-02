import React from "react";
import { HiMiniCircleStack } from "react-icons/hi2";
import { VscSymbolNamespace } from "react-icons/vsc";
import { VscVmOutline } from "react-icons/vsc";
import { RiNumbersFill } from "react-icons/ri";

function Concept({ bgColor, title, icon }) {
  return (
    <div className={`relative bg-${bgColor} flex justify-between items-center rounded-md`}>
      <div className="absolute top-8 left-[20%] flex justify-center rounded-lg items-center w-[48px] h-[48px] bg-white ">
        {
            icon == 1 && <VscSymbolNamespace className="w-[30px] h-[30px]" />
        }
        {
            icon == 2 && <HiMiniCircleStack className="w-[30px] h-[30px]" />
        }
        {
            icon == 3 && <VscVmOutline className="w-[30px] h-[30px]"></VscVmOutline>
        }
        {
            icon == 4 && <RiNumbersFill className="w-[30px] h-[30px]" />
        }
      </div>
      <div className="absolute top-24 md:top-20 left-1 ml-2 md:mx-8 text-white"> 
        {title}
      </div>
      <div className="absolute top-20 md:top-32 right-3 w-40 h-32">
      {
            icon == 1 && <VscSymbolNamespace className="w-[100%] h-[100%]"/>
        }
        {
            icon == 2 && <HiMiniCircleStack className="w-[100%] h-[100%]"/>
        }
        {
            icon == 3 && <VscVmOutline className="w-[100%] h-[100%]"></VscVmOutline>
        }
        {
            icon == 4 && <RiNumbersFill className="w-[100%] h-[100%]"/>
        }
      </div>
    </div>
  );
}

export default Concept;
