"use client";
import Image from "next/image";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";

const ThirdPart = () => {
  return (
    <div className="mx-auto pb-40 overflow-hidden">
      <div className="relative z-10 w-full">
        <div className="relative w-full">
          <Image
            src="/1.png"
            width={1500}
            height={500}
            alt="Description of the image"
            className="-z-[1] right-40 absolute"
          />
          <div className="flex flex-col lg:flex-row mx-auto items-end gap-0 lg:gap-28 justify-center">
            <LeftSection></LeftSection>
            <RightSection></RightSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPart;
