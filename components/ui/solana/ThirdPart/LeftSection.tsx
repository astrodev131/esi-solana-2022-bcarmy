"use client";
import React, { useState } from "react";
import { Input } from "../../input";

export default function LeftSection() {
  const [volume, setVolume] = useState("");
  const [holdings, setHoldings] = useState("");
  const [solPrice, setSolPrice] = useState<number | 0>(0);
  const fetchData = async () => {
    const res = await fetch(
      "https://api.allorigins.win/get?url=" +
        encodeURIComponent(
          "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
        )
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    const parsedData = JSON.parse(data.contents);
    setSolPrice(parsedData.solana.usd);
  };

  React.useEffect(() => {
    fetchData().catch((error) => console.error("Fetch error:", error));
  }, []);

  console.log(solPrice, "solPrice");
  // Calculate values
  const volumeNum = Number(volume) || 0;
  const holdingsNum = Number(holdings) || 0;

  // Calculations based on the example values
  const dailyRewardsPool = Math.floor(volumeNum * 0.05);
  const tokenBurn = Math.floor(volumeNum * 0.01);
  const dailyEarnings = Number(((holdingsNum / 4500) * 0.11).toFixed(2));
  return (
    <div className="w-full md:w-[600px] lg:mx-1 mx-auto  mt-14 lg:mt-20 bg-[#0c0c0d7e] border-2 border-purple-900 rounded-[5px]">
      <div className="px-5 py-7">
        <div className="flex justify-start gap-2 items-center">
          <div className="bg-purple-800 w-3 h-3 rounded-full"></div>
          <div className="text-3xl xl:text-5xl">Rewards calculator</div>
        </div>
        <div className="flex justify-start flex-col gap-2 mt-3">
          <div className="text-purple-900">24h Volume (USD)</div>
          <div className="relative">
            <Input
              className="bg-[#00000077] w-full border-2 border-purple-900 rounded-[5px] text-white px-2 py-1 pl-6"
              type="number"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              placeholder="0"
              style={{ outline: "none" }}
            />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white">
              $
            </span>

            <span className="absolute right-8 top-1/2 text-purple-900 transform -translate-y-1/2">
              USD
            </span>
          </div>
        </div>
        <div className="flex justify-start flex-col gap-2 mt-3">
          <div className="text-purple-900">Your $SMG Holdings</div>
          <div className="relative">
            <Input
              className="bg-[#00000077] w-full border-2 rounded-[5px] border-purple-900 text-white px-2 py-1 pl-6"
              type="number"
              value={holdings}
              onChange={(e) => setHoldings(e.target.value)}
              placeholder="0"
              style={{ outline: "none" }}
            />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white">
              $
            </span>
          </div>
        </div>
        <div className="border-2 transparency-[30%] bg-[#00000077] p-3 border-purple-900 rounded-[5px] mt-7">
          <div className="flex justify-between items-center py-3 border-b border-purple-900">
            <div>Daily Rewards Pool</div>
            <div className="text-purple-800 text-3xl">
              {" "}
              ${dailyRewardsPool.toLocaleString()}
            </div>
          </div>{" "}
          <div className="flex justify-between items-start py-3 border-b border-purple-900">
            <div>Your Daily Earnings</div>
            <div className="text-purple-800 flex flex-col items-end">
              <div className="text-3xl"> ${dailyEarnings.toLocaleString()}</div>
              <div>
                {solPrice ? (dailyEarnings / solPrice).toLocaleString() : "N/A"}{" "}
                SOL
              </div>
            </div>
          </div>{" "}
          <div className="flex justify-between items-start py-3">
            <div>Your Monthly Earnings</div>
            <div className="text-purple-800 flex flex-col items-end">
              <div className="text-3xl">
                {" "}
                ${(dailyEarnings * 30).toLocaleString()}
              </div>
              <div>
                {" "}
                {solPrice
                  ? ((dailyEarnings * 30) / solPrice).toLocaleString()
                  : "N/A"}{" "}
                SOL
              </div>
            </div>
          </div>{" "}
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="text-[12px] text-gray-500">
            Calcualations based on current trading volume and token holdings
          </div>
          <div className="flex font-bold text-lg justify center gap-1 text-purple-900">
            <div>SOL</div>
            <div>:</div>
            <div>${solPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
