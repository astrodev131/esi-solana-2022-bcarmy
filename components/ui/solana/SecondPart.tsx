import React from "react";
import SRPCircle from "./SRPCircle";

const SecondPart = () => {
  return (
    <div className="flex justify-center h-[100vh] items-center relative">
      <SRPCircle size="210px" />
      <div className="absolute text-2xl top-16 left-60">
        <div className="flex items-center gap-2 pb-3">
          <div className="w-2 h-2 rounded-full bg-[#5015c9]"></div>
          <p>5% tax on each tx</p>
        </div>
        <div className="flex flex-col">
          <span>3% to holders in SOL</span>
          <span>1% bum</span>
          <span>1% marketing</span>
        </div>
      </div>
      <div className="absolute text-2xl top-[30vh] left-36">
        <div className="flex items-center gap-2 pb-3">
          <div className="w-2 h-2 rounded-full bg-[#5015c9]"></div>
          <p>100% fair launch</p>
        </div>
        <div className="flex flex-col">
          <span>No problem</span>
          <span>No team tokens</span>
        </div>
      </div>
      <div className="absolute text-2xl top-[60vh] left-44">
        <div className="flex items-center gap-2 pb-3">
          <div className="w-2 h-2 rounded-full bg-[#5015c9]"></div>
          <p>Automatic rewards</p>
        </div>
        <div className="flex flex-col">
          <span>Receive SOL automatically</span>
          <span>every 5 minutes</span>
        </div>
      </div>
      <div className="absolute text-2xl top-20 right-44">
        <div className="uppercase pb-3">how it works?</div>
        <div className="flex flex-col">
          <div className="flex p-1 gap-2">
            <div className="w-2 h-2 mt-3 rounded-full bg-[#5015c9]"></div>
            <span>5% tax is collected from every buy <br /> and sell transaction</span>
          </div>
          <div className="flex p-1 gap-2">
            <div className="w-2 h-2 mt-3 rounded-full bg-[#5015c9]"></div>
            <span>Tax is automatically converted to <br /> Solana</span>
          </div>
          <div className="flex p-1 gap-2">
            <div className="w-2 h-2 mt-3 rounded-full bg-[#5015c9]"></div>
            <span>Smart contract distributes Solana <br /> to all holders every 5 minutes</span>
          </div>
          <div className="flex p-1 gap-2">
            <div className="w-2 h-2 mt-3 rounded-full bg-[#5015c9]"></div>
            <span>Rewards are proportional<br /> to your token holdings</span>
          </div>
        </div>
      </div>
      <div className="absolute text-2xl top-[56vh] right-48">
        <div className="uppercase pb-3">why 3/1/1 partition?</div>
        <div className="flex flex-col">
          <div className="flex p-1 gap-2">
            <div className="w-2 h-2 mt-3 rounded-full bg-[#5015c9]"></div>
            <span>3% is redistributed in order to <br /> incertvize to hold</span>
          </div>
          <div className="flex p-1 gap-2">
            <div className="w-2 h-2 mt-3 rounded-full bg-[#5015c9]"></div>
            <span>1% is bumt in order to keep the <br /> price stable</span>
          </div>
          <div className="flex p-1 gap-2">
            <div className="w-2 h-2 mt-3 rounded-full bg-[#5015c9]"></div>
            <span>1% is used to find marketing <br />and attract new holders</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
