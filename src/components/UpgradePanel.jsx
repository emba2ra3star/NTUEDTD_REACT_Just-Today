// 卡片
import {useDispatch} from 'react-redux'
import { addScore } from '../redux/scoreSlice';
import { use } from 'react';

function UpgradePanel({ score, upgrades, setUpgrades }) {
  const dispatch =useDispatch();
    const handleBuy = (id, cost) => {
      if (score < cost) return alert("點數不足！");
  
      // 扣分數
      dispatch(addScore(-cost));
      alert("你購買了${item.name}！");
  
      // // 更新 purchased 狀態
      // const updated = upgrades.map((item) =>
      //   item.id === id ? { ...item, purchased: true } : item
      // );
      // setUpgrades(updated);
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
            <p className="text-lg font-bold text-black">{item.name}</p>
            <p className="text-sm text-black">{item.effect}</p>
            <p className="my-2 text-blue-700">💎 花費：{item.cost}</p>
  
            <button
              disabled={score < item.cost}
              onClick={() => handleBuy(item.id, item.cost)}
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
  