import { useState } from "react";
function ScoreBar({ score, clickCount, time }) {
    return(
    <div className="flex flex-col md:flex-row justify-between items-center gap-2 p-3 mb-4 bg-white/80 rounded-md shadow text-black text-sm md:text-base">
      <div>
        <span className="font-semibold">目前積分：</span>
        <span className="text-lg font-bold">{score} 分</span>
      </div>

      <div>
        <span className="font-semibold">點擊次數：</span>
        {clickCount} 下
      </div>

      <div>
        <span className="font-semibold">你摸了多久魚：</span>
        {time}
      </div>
    </div>
  );
}
export default ScoreBar;
