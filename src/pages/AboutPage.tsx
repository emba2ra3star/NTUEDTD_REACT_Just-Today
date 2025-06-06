import React, { useState } from "react";
import NavMenu from "../components/NavMenu";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";
import { Info, Smile, MessageSquare } from "lucide-react";

const AboutPage: React.FC = () => {
  const [rating, setRating] = useState(0); // 新增 state 管理評分

  return (
    <div className="main_layout flex flex-col bg-white text-black">
      <Helmet>
        <title>關於我們(未登入)</title>
      </Helmet>


      <div className="flex flex-1 pt-[5rem]">
        {/* 左側 NavMenu */}
        <NavMenu />

        {/* 主要內容 */}
        <div className="flex-1 p-10 flex gap-6">
          <div className="flex-1 flex flex-col gap-6">
            {/* 關於我們卡片 */}
            <div className="flex-1 rounded-3xl border-2 border-[#4D5C92] p-6 shadow flex flex-col">
              <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
                <Info size={20} />
                關於我們
              </h2>
              <div className="space-y-3 flex-1 overflow-auto">
                <div>
                  <p className="font-semibold">說明</p>
                  <p className="text-sm text-gray-500">本專案為期末作業展示平台。</p>
                </div>
                <div>
                  <p className="font-semibold">開發工具</p>
                  <p className="text-sm text-gray-500">React / Vite</p>
                </div>
              </div>
            </div>

            {/* 開發團隊 */}
            <div className="flex-1 rounded-3xl border-2 border-[#4D5C92] p-6 shadow flex flex-col">
              <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
                <Smile size={20} />
                開發團隊成員
              </h2>
              <div className="space-y-4 flex-1 overflow-auto">
                {[
                  { name: "陳嘉欣", note: "前端開發 / 視覺設計" },
                  { name: "金蔓均", note: "前端開發 / 功能設計" }
                ].map((member, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300" />
                    <div>
                      <p className="font-semibold">{member.name}</p>
                      <p className="text-sm text-gray-500">{member.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 意見回饋卡片 */}
          <div className="w-[320px] rounded-3xl border-2 border-[#4D5C92] p-6 shadow">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
              <MessageSquare size={20} />
              意見回饋
            </h2>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-200" />

              {/* 星星評分區 */}
              <div className="flex gap-1 text-xl">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => setRating(star)}
                    className={`cursor-pointer ${
                      star <= rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <div className="w-full p-3 border border-dashed text-center text-sm text-gray-500 rounded-md min-h-[100px]">
                登入帳戶即可將向我們傳送建議
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
