import NavMenu from "../components/NavMenu";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";
import { UserCircle, RefreshCcw, ChevronRight } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="main_layout flex flex-col bg-white text-black">
      <Helmet>
        <title>設定(未登入)</title>
      </Helmet>

      {/* #這個是有特別需要嗎？？ */}
      <Header />

      <div className="flex flex-1 pt-[5rem]">
        {/* 左側 NavMenu */}
        <NavMenu />

        {/* 主區塊：左右兩卡片 */}
        <div className="flex-1 p-10 flex gap-8">
          {/* 左卡：基本設定 */}
          <div className="flex-1 rounded-3xl border p-6 shadow">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <UserCircle size={20} />
              基本設定
            </h2>

            <div className="flex justify-between items-center py-2 border-b">
              <div>
                <p className="font-semibold">外觀顏色</p>
                <p className="text-sm text-gray-500">自訂介面顯示主題顏色</p>
              </div>
              <select className="border rounded px-2 py-1">
                <option>淺色</option>
                <option>深色</option>
              </select>
            </div>

            <div className="flex justify-between items-center py-2 border-b">
              <div>
                <p className="font-semibold">語言</p>
                <p className="text-sm text-gray-500">更改介面顯示的語言</p>
              </div>
              <select className="border rounded px-2 py-1">
                <option>繁體中文</option>
                <option>English</option>
              </select>
            </div>

            <div className="flex justify-between items-center py-2 border-b">
              <div>
                <p className="font-semibold">時區</p>
                <p className="text-sm text-gray-500">目前時區設定</p>
              </div>
              <select className="border rounded px-2 py-1">
                <option>GMT+8:00</option>
                <option>GMT+0:00</option>
              </select>
            </div>

            <div className="flex justify-between items-center py-4">
              <div>
                <p className="font-semibold">還原番茄鐘設定</p>
                <p className="text-sm text-gray-500">重設為預設值</p>
              </div>
              <button className="text-gray-700 hover:text-black">
                <RefreshCcw />
              </button>
            </div>
          </div>

          {/* 右卡：帳戶設定 */}
          <div className="w-[300px] rounded-3xl border p-6 shadow">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <UserCircle size={20} />
              帳戶設定
            </h2>

            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full bg-gray-200" />
              <p className="text-sm text-gray-500">尚未登入</p>

              <div className="w-full p-3 border border-dashed text-center text-sm text-gray-500 rounded-md">
                登入帳戶即可將資料儲存至雲端
              </div>

              <button className="w-full bg-black text-white py-2 rounded-md flex justify-center items-center gap-2 mt-2">
                登入帳戶 <ChevronRight size={16} />
              </button>

              <button className="w-full border py-2 rounded-md text-sm">
                註冊 #
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
