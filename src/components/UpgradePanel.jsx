// 卡片
function UpgradePanel({ score, setScore, upgrades, setUpgrades }) {
    const handleBuy = (id, cost) => {
      if (score < cost) return alert("點數不足！");
  
      // 扣分數
      setScore(score - cost);
  
      // 更新 purchased 狀態
      const updated = upgrades.map((item) =>
        item.id === id ? { ...item, purchased: true } : item
      );
      setUpgrades(updated);
    };
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {upgrades.map((item) => (
          <div
            key={item.id}
            className={`p-4 rounded shadow ${
              item.purchased ? "bg-gray-300 text-gray-500" : "bg-white"
            }`}
          >
            <p className="text-lg font-bold">{item.name}</p>
            <p className="text-sm">{item.effect}</p>
            <p className="my-2 text-blue-700">💎 花費：{item.cost}</p>
  
            <button
              disabled={item.purchased || score < item.cost}
              onClick={() => handleBuy(item.id, item.cost)}
              className="btn btn-sm btn-primary w-full"
            >
              {item.purchased ? "已購買" : "購買"}
            </button>
          </div>
        ))}
      </div>
    );
  }
  
  export default UpgradePanel;
  