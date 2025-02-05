'use client'
import { ChartLine, DollarSign, Lock, RefreshCw } from 'lucide-react';
import React, { useState } from 'react'

const Experience = () => {
      const [activeTab, setActiveTab] = useState("trader");
  return (
    <div className="py-10 px-4 md:px-20">
        <h2 className="text-amber-900 text-3xl font-bold font-antiqua text-center mb-4">Optimize your Experience</h2>

        <div className="flex justify-center mb-4 space-x-4">
          <button className={`cursor-pointer px-4 py-2 rounded-full font-medium ${activeTab==='trader'?'bg-[#A3D9BA]':'bg-transparent border border-mint-green text-mint-green'}`}
          onClick={() => setActiveTab('trader')}
          >
            For Traders
          </button>

          <button className={`cursor-pointer px-4 py-2 rounded-full font-medium ${activeTab==='liquidity'?'bg-[#A3D9BA]':'bg-transparent border border-mint-green text-mint-green'}`}
          onClick={() => setActiveTab('liquidity')}
          >
            For Liquidty Providers
          </button>
        </div>

        <div className="flex justify-center">
          <div className="p-1.5 border max-w-lg border-secondary bg-secondary-light rounded-md group  duration-200 hover:scale-105 hover:shadow-2xl">
            <div className="bg-gradient-to-tr from-white/50 via-white to-white/25 p-8 border border-secondary rounded-md h-full shadow-lg shadow-secondary-dark/25 ">
              {activeTab === 'trader' && (
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-amber-900 font-antiqua">Trade with Confidence</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <DollarSign className="w-[18px] text-blue-300 mt-0.5"/>
                      <div>
                        <span className="font-semibold">Better Prices</span>
                        <p className="text-sm text-[#6b7280]">
                          Benifit from tighter spreads and reduced slippage through enhanced market depth.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <Lock className="w-[18px] text-blue-300 mt-0.5"/>
                      <div>
                        <span className="font-semibold">Zero Lock-up</span>
                        <p className="text-sm text-[#6b7280]">
                          Keep your capital free until your orders are matched and executed.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'liquidity' && (
                <div>
                <h3 className="text-2xl font-semibold mb-4 text-amber-900 font-antiqua">Maximize Your Returns</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <RefreshCw className="w-[18px] text-blue-300 mt-0.5"/>
                    <div>
                      <span className="font-semibold">Capital Efficiency</span>
                      <p className="text-sm text-[#6b7280]">
                        Use the same capital across multiple markets and earn yields while waiting for trades.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2">
                    <ChartLine className="w-[18px] text-blue-300 mt-0.5"/>
                    <div>
                      <span className="font-semibold">Higher ROI</span>
                      <p className="text-sm text-[#6b7280]">
                        Eliminate opportunity costs and maximize returns with virtual liquidity.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Experience