function FishDisplay({ onClickFish }) {
  return (
    <div className="flex justify-center items-center">
      <img
        src="/fish1.png" // 請將圖片放在 public 資料夾中，或替換為你自己的魚圖
        alt="Fish"
        className="w-48 h-48 animate-bounce cursor-pointer"
        onClick={onClickFish}
      />
    </div>
  );
}

export default FishDisplay;
