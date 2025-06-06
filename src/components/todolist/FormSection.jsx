import { useState } from "react";

function FormSection() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = () => {
    if (tagInput.trim() !== "") {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleClear = () => {
    setTitle("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setTags([]);
    setTagInput("");
  };

  return (
    <form className="space-y-4 text-black">
      <div>
        <div className="flex items-center gap-2 text-xl font-bold mb-4">
          <img src="/Plus.png" alt="icon" className="w-6 h-6" />
          新增項目
        </div>    
        <h2 className="text-lg font-bold">事項名稱</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>

      <div>
        <h2 className="text-lg font-bold">詳細說明</h2>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea textarea-bordered w-full"
          rows="4"
          placeholder="請輸入詳細內容（選填）"
        />
      </div>

      <div>
        <h2 className="text-lg font-bold ">開始時間</h2>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="input input-bordered w-full "
        />
      </div>

      <div>
        <h2 className="text-lg font-bold">結束時間</h2>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>

      <div>
        <h2 className="text-lg font-bold">標籤</h2>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            className="input input-bordered flex-grow"
            placeholder="輸入標籤名稱"
          />
          <button type="button" onClick={handleAddTag} className="btn btn2 rounded-full">
            新增
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-secondary">{tag}</span>
          ))}
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button type="button" onClick={handleClear} className="btn w-54 rounded-full ">
          清除
        </button>
        <button
            type="button"
            className="btn w-64 rounded-full bg-[#4D5C92] text-white"
            onClick={() => {
              setTasks([
                ...tasks,
                {
                  ...formData,
                  id: Date.now(), // 可以加上 ID
                },
              ]);
              setFormData({
                title: "",
                description: "",
                startDate: "",
                startTime: "",
                endTime: "",
                tags: [],
              });
            }}
          >
          新增
        </button>

      </div>
    </form>
  );
}

export default FormSection;
