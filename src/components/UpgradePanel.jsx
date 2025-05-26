function UpgradePanel({ score, upgrades, setScore }) {
  const handleBuy = (cost, name) => {
    if (score < cost) return alert("點數不足！");
    setScore((prev) => prev - cost);
    alert(`你購買了 ${name}！`);
  };

  return (
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
            onClick={() => handleBuy(item.cost, item.name)}
            className="btn btn-sm btn-primary w-full"
          >
            購買
          </button>
        </div>
      ))}
    </div>
  );
}
export default UpgradePanel;
