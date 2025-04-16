export default function TaskFormPage() {
    return (
      <div className="flex bg-green-100 min-h-screen p-8">
        {/* 左半部：表單 */}
        <div className="w-1/2 pr-6">
          <button>←</button>
          <h2 className="text-xl font-bold">事項名稱</h2>
          {/* 各個欄位放這 */}
        </div>
  
        {/* 右半部：待辦預覽 */}
        <div className="w-1/2 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">待辦事項</h2>
          {/* 項目預覽 */}
        </div>
      </div>
    )
  }
  
  