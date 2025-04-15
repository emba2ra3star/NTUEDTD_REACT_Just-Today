import ScoreBar from "../components/ScoreBar";
import { useState, useEffect } from "react";
import ClickHint from "../components/ClickHint";
import FishDisplay from '../components/FishDisplay';
import UpgradePanel from '../components/UpgradePanel';



function FishGame() {
  const [score, setScore] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [upgrades, setUpgrades] = useState([
    { id: 1, name: "好吃飼料", cost: 10, effect: "+自動加分", purchased: false },
    { id: 2, name: "海草床", cost: 20, effect: "+點擊加倍", purchased: false },
    { id: 3, name: "潛水艇探險", cost: 50, effect: "增加樂趣！", purchased: false },
    { id: 4, name: "海綿寶寶鳳梨屋", cost: 100, effect: "增加遊玩體驗！", purchased: false },
  ]);

  // 計時器
  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  // 時間格式轉換
  const formatTime = (sec) => {
    const min = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `00 : ${min} : ${s}`;
  };
  const handleFishClick = () => {
    setClickCount((prev) => prev + 1);
    setScore((prev) => prev + 2); // 每次點擊 +2 分
  };

  return (
    <div className="pt-16 px-4 bg-cover min-h-screen">
      <ScoreBar score={score} clickCount={clickCount} time={formatTime(seconds)} />
      <ClickHint text="點擊跳動 🐟" />
      <FishDisplay onClickFish={handleFishClick} />
      <UpgradePanel
        score={score}
        setScore={setScore}
        upgrades={upgrades}
        setUpgrades={setUpgrades}
        />
    </div>
  );
}
export default FishGame;
