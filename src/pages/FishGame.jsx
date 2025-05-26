import { useDispatch, useSelector } from 'react-redux';
import { addScore } from '../redux/scoreSlice';

import { useState, useEffect } from "react";
import ScoreBar from "../components/ScoreBar";
import ClickHint from "../components/ClickHint";
import FishDisplay from '../components/FishDisplay';
import UpgradePanel from '../components/UpgradePanel';
import { Helmet } from "react-helmet-async";
import NavMenu from '../components/NavMenu';

function FishGame() {
  const score = useSelector((state) => state.score.value);
  const dispatch = useDispatch();
  const [clickCount, setClickCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [upgrades, setUpgrades] = useState([
    { id: 1, name: "好吃的飼料", cost: 100, effect: "+10/s", purchased: false },
    { id: 2, name: "海草呼海草", cost: 600, effect: "+30/s", purchased: false },
    { id: 3, name: "更多好撈游", cost: 1800, effect: "+50/s", purchased: false },
    { id: 4, name: "美味的一餐", cost: 4000, effect: "+150/s", purchased: false },
  ]);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (sec) => {
    const min = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `00 : ${min} : ${s}`;
  };

  const handleFishClick = () => {
    dispatch(addScore(2));
    setClickCount((prev) => prev + 1);
  };

  return (
    <div className="flex min-h-screen">
      {/* 左側導覽列 */}
      <div className="w-[240px]">
        <NavMenu />
      </div>

      {/* 右側主體 */}
      <div className="flex-1 flex flex-col">
        <Helmet>
          <title>Just Today | 摸魚遊戲</title>
        </Helmet>

        {/* 頂部：積分與快樂指數 */}
        <div className="flex justify-end items-center gap-4 p-4">
          <div className="border border-black rounded-full px-6 py-2 text-lg font-medium">
            積分：{score}
          </div>
          <div className="border border-black rounded-full px-6 py-2 text-lg font-medium">
            快樂指數：歡樂滿滿
          </div>
          <button className="ml-auto border px-4 py-2 rounded-full">登入｜註冊</button>
        </div>

        {/* 主內容：中間魚 + 右邊升級 */}
        <div className="flex flex-1 px-8">
          {/* 魚區塊 */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <ClickHint text="點擊跳動 🐟" />
            <FishDisplay onClickFish={handleFishClick} />
          </div>

          {/* 升級區塊 */}
          <div className="w-[320px] flex flex-col items-end pt-4">
            <UpgradePanel score={score} upgrades={upgrades} setUpgrades={setUpgrades} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FishGame;
