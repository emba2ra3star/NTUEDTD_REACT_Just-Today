function FishDisplay({ onClickFish }) {
  return (
    <div className="flex justify-center items-center">
      <img
        src="/fish1.png"  // 確保圖片存在 public/fish1.png
        alt="Fish"
        className="w-48 h-48 animate-bounce cursor-pointer"
        onClick={onClickFish}
      />
    </div>
  );
}

export default FishDisplay;
