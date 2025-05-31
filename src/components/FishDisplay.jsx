function FishDisplay({ onClickFish }) {
  return (
    <div className="flex justify-center items-center">
      <img
        src="/fish1.png"  
        className="w-48 h-48 animate-bounce cursor-pointer"
        onClick={onClickFish}
      />
    </div>
  );
}

export default FishDisplay;
