import { useState } from 'react';

function FishDisplay({ onClickFish }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClickFish?.(); // 呼叫外部加分函式（如果有傳入）
    setTimeout(() => setIsClicked(false), 150); // 動畫時間
  };

  return (
    <div className="flex justify-center items-center gap-12 my-8">
      {/* 靜止的左邊魚 */}
      <img src="src\images\fish1.png" alt="魚魚" className="w-48" />

      {/* 可點擊的右邊魚 */}
      <img
        src="src\images\fish2.png"
        alt="點擊魚"
        onClick={handleClick}
        className={`w-72 cursor-pointer transition-transform duration-150 ${
          isClicked ? 'scale-110 rotate-3' : ''
        }`}
      />
    </div>
  );
}

export default FishDisplay;
