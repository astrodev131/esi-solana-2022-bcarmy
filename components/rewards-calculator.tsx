"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function RewardsCalculator() {
  const [volume, setVolume] = useState("");
  const [holdings, setHoldings] = useState("");

  // Calculate values
  const volumeNum = Number(volume) || 0;
  const holdingsNum = Number(holdings) || 0;

  // Calculations based on the example values
  const dailyRewardsPool = Math.floor(volumeNum * 0.05);
  const tokenBurn = Math.floor(volumeNum * 0.01);
  const dailyEarnings = Number(((holdingsNum / 4500) * 0.11).toFixed(2));

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm text-gray-400">24h Volume (USD)</label>
        <Input
          type="number"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          className="bg-transparent border-[#00ff00]/20 rounded-none focus:ring-0 focus:border-[#00ff00]/40 text-white"
          placeholder="0"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm text-gray-400">Your $SMG Holdings</label>
        <Input
          type="number"
          value={holdings}
          onChange={(e) => setHoldings(e.target.value)}
          className="bg-transparent border-[#00ff00]/20 rounded-none focus:ring-0 focus:border-[#00ff00]/40 text-white"
          placeholder="0"
        />
      </div>

      <div className="space-y-4 pt-2">
        <div>
          <div className="text-gray-400">Daily Rewards Pool:</div>
          <div className="text-[#00ff00] text-2xl font-mono">
            ${dailyRewardsPool.toLocaleString()}
          </div>
        </div>

        <div>
          <div className="text-gray-400">Your Daily Earnings:</div>
          <div className="text-[#00ff00] text-2xl font-mono">
            ${dailyEarnings.toLocaleString()}
          </div>
        </div>

        <div>
          <div className="text-gray-400">Token Burn Amount:</div>
          <div className="text-[#00ff00] text-2xl font-mono">
            ${tokenBurn.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}
