import { Coffee, ConciergeBell, Dot, Pickaxe, SquareMinus, SquarePlus } from "lucide-react";
import { useState } from "react";
import ClockTimer from "./ClockTimer";


function ClockFace() {
    const tabList = [
        { label: "專注時間", icon: <Pickaxe className="size-4 me-2" />, minHand: 25, secHand: 0,note:"設定一個單位的工作時長" },
        { label: "小休息", icon: <Coffee className="size-4 me-2" />, minHand: 5, secHand: 0,note:"設定一個單位的間歇休息時長" },
        { label: "大休息", icon: <ConciergeBell className="size-4 me-2" />, minHand: 15, secHand: 0,note:"設定回合結束後的休息時長" },
    ];
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            {/* 標籤列 */}
            <div className=" mt-[0.5rem] tabs tabs-lift flex flex-row justify-between items-center">
                <div>
                    {tabList.map((tab, index) => (
                        <button
                            key={index}
                            className={`tab ${activeTab === index ? "tab-active" : ""} text-[20px]`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>
                <p className="hidden md:block items-end text-[1rem]">{tabList[activeTab].note}</p>
            </div>

            {/* 內容區塊 */}
            <div className="bg-base-300 border border-base-300 rounded-box p-4">
                <div className="flex flex-cols justify-center items-center gap-[3rem]">
                    <div className="justify-center grid grid-rows-2 gap-2 items-center">
                        <SquarePlus size={"48px"} color="#8FE189" />
                        <SquareMinus size={"48px"} color="#8FE189" />
                    </div>
                    <div className="grid grid-cols-5 justify-center items-center text-[96px] mr-[102px]">
                        <ClockTimer val={tabList[activeTab].minHand} textSize={96} />
                        <span className="col-span-1 mx-2">:</span>
                        <ClockTimer val={tabList[activeTab].secHand} textSize={96} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClockFace;