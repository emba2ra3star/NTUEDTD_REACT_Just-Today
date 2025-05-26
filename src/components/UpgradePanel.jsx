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
          <div className="flex items-center gap-3 mb-1">
            <img src={item.icon} alt={item.name} className="w-6 h-6" />
            <p className="text-base font-semibold">{item.name}</p>
          </div>

          <p className="text-sm text-gray-600 mb-2">{item.effect}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-blue-700 font-medium">
              <img src="/lock_open_right.png" alt="lock" className="w-4 h-4" />
              花費：{item.cost}
            </div>
            <button
              disabled={score < item.cost}
              onClick={() => handleBuy(item.cost, item.name)}
              className="btn btn-sm btn-primary disabled:opacity-50"
            >
              購買
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default UpgradePanel;
