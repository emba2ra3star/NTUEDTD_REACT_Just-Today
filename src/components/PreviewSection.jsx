function PreviewSection() {
    const tasks = [
      { date: "03/28", name: "完成英文雜誌文章學習一篇" },
      { date: "03/29", name: "數學模考一回" },
    ];
  
    return (
      <div>
        <h2 className="text-xl font-bold mb-4 text-black">待辦事項</h2>
        {tasks.map((task, index) => (
          <div key={index} className="border p-2 mb-2 flex justify-between text-black">
            <span>{task.date}</span>
            <span>{task.name}</span>
          </div>
        ))}
      </div>
    );
  }
  
  export default PreviewSection;
  