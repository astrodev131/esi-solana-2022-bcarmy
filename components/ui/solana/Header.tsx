import React from "react";

const Header = () => {
  return (
    <div className="relative">
      <div className="text-xl flex flex-col">
        <span>Solana</span>
        <span>Rewards</span>
        <span>Protocol</span>
      </div>
      <img src="/1.png" className="absolute right-1/2 top-0 translate-x-1/2 w-full -translate-y-1/2" />      
    </div>
  );
};

export default Header;
