import { useState } from "react";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import FishDisplay from "../components/FishDisplay";
import UpgradePanel from "../components/UpgradePanel";

function FishGame() {
  const [score, setScore] = useState(0);
  const [happiness] = useState("歡樂滿滿");

  const upgrades = [
    { id: 1, name: "好吃的飼料", cost: 100, effect: "積分 +10/s", icon: "⚫" },
    { id: 2, name: "海草呼海草", cost: 600, effect: "積分 +30/s", icon: "🌿" },
    { id: 3, name: "更多好撈游", cost: 1800, effect: "積分 +50/s", icon: "🐟" },
    { id: 4, name: "美味的一餐", cost: 4000, effect: "積分 +150/s", icon: "🍽️" },
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
    <div className="h-screen overflow-hidden">
      {/* Header 是固定的 */}
      <Header />

      {/* 扣除 header 高度（64px）後的主體區塊 */}
      <div className="flex h-[calc(100vh-64px)]">
        {/* 左側 NavMenu */}
        <div className="w-[240px] h-full border-r border-gray-300 overflow-hidden">
          <NavMenu />
        </div>

        {/* 中間主內容 + 右側升級 */}
        <div className="flex-1 flex relative">
          {/* 中間區：魚與分數 */}
          <div className="flex-1 flex items-center justify-center relative">
            <div className="absolute top-10 left-1/3 -translate-x-1/2 flex gap-6 z-10">
              <div className="border-2 border-black rounded-full px-6 py-2 font-bold">
                積分：{score}
              </div>
              <div className="border-2 border-black rounded-full px-6 py-2 font-bold">
                快樂指數：{happiness}
              </div>
            </div>
            <FishDisplay onClickFish={handleFishClick} />
          </div>

          {/* 右側升級面板 */}
          <div className="w-[320px] h-full px-4 py-8 overflow-y-auto">
            <div className="flex flex-col gap-4">
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
      </div>
    </div>
  );
}

export default FishGame;
