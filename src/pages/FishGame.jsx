import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import FishDisplay from "../components/FishDisplay";
import UpgradePanel from "../components/UpgradePanel";

export default function FishGame() {
  const [score, setScore] = useState(0);
  const [happiness] = useState("歡樂滿滿");

  const upgrades = [
    {
      id: 1,
      name: "好吃的飼料",
      effect: "積分 +10/s",
      cost: 100,
      icon: "/bubble_chart.png",
    },
    {
      id: 2,
      name: "海草呼海草",
      effect: "積分 +30/s",
      cost: 600,
      icon: "/grass.png",
    },
    {
      id: 3,
      name: "更多好撈游",
      effect: "積分 +50/s",
      cost: 1800,
      icon: "/image 20.png",
    },
    {
      id: 4,
      name: "美味的一餐",
      effect: "積分 +150/s",
      cost: 4000,
      icon: "/set_meal.png",
    },
  ];



  const handleFishClick = () => {
    setScore((prev) => prev + 2);
  };

  const handleUpgradeBuy = (cost, name) => {
    if (score >= cost) {
      setScore((prev) => prev - cost);
      alert(`你購買了 ${name}！`);
    } else {
      alert("積分不足！");
    }
  };

  return (
    <div className="main_layout text-black bg-white">
      <Helmet>
        <title>Just Today | 摸魚遊戲</title>
      </Helmet>

      {/* 主內容：左右分欄，和 TodoList 結構一致 */}
      <div className="content max-h-[calc(100vh-6rem)] flex mt-[5rem]">
        {/* 左側 NavMenu */}
        <NavMenu />

        {/* 右側主體 */}
        <div className="flex-1 p-6 flex">
          {/* 中間魚 + 指數 */}
          <div className="flex-1 flex flex-col items-center justify-center relative">
            {/* 分數顯示在上方靠左 */}
            <div className="absolute top-0 left-1/3 -translate-x-1/2 flex gap-6 z-10 mt-6">
              <div className="border-2 border-black rounded-full px-6 py-2 font-bold">
                積分：{score}
              </div>
              <div className="border-2 border-black rounded-full px-6 py-2 font-bold">
                快樂指數：{happiness}
              </div>
            </div>

            {/* 魚圖 */}
            <div className="mt-20">
              <FishDisplay onClickFish={handleFishClick} />
            </div>
          </div>

          {/* 右側升級卡片 */}
          <div className="w-[320px] flex flex-col gap-4">
            {upgrades.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-white rounded shadow border border-gray-300"
              >
                <p className="text-lg font-bold">{item.icon} {item.name}</p>
                <p className="text-sm text-gray-700">{item.effect}</p>
                <p className="my-2 text-blue-700">💎 花費：{item.cost}</p>
                <button
                  disabled={score < item.cost}
                  onClick={() => handleUpgradeBuy(item.cost, item.name)}
                  className="btn btn-sm btn-primary w-full disabled:opacity-50"
                >
                  購買
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer" />
    </div>
  );
}
