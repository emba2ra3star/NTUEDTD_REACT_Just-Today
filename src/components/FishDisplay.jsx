import { useDispatch, useSelector } from 'react-redux';
import { addScore } from '../redux/scoreSlice';

import { useState, useEffect } from "react";
import NavMenu from "../components/NavMenu";
import ScoreBar from "../components/ScoreBar";
import ClickHint from "../components/ClickHint";
import FishDisplay from '../components/FishDisplay';
import UpgradePanel from '../components/UpgradePanel';
import { Helmet } from "react-helmet-async";

function FishGame() {
  const score = useSelector((state) => state.score.value);
  const dispatch = useDispatch();
  const [clickCount, setClickCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [upgrades] = useState([
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
    <div className="main_layout text-black">
      <Helmet>
        <title>Just Today | 摸魚遊戲</title>
      </Helmet>

      {/* 主體 layout */}
      <div className="flex min-h-screen pt-[5rem]">

        <div className="w-1/6">
          <NavMenu pageTitle="摸魚" />
        </div>
        <div className="flex-1 px-6 pb-10 bg-blue-50">
          <ScoreBar score={score} clickCount={clickCount} time={formatTime(seconds)} />
          <ClickHint text="點擊跳動 🐟" />
          <FishDisplay onClickFish={handleFishClick} />
          <UpgradePanel score={score} upgrades={upgrades} />
        </div>
      </div>

      <div className="footer" />
    </div>
  );
}

export default FishGame;
