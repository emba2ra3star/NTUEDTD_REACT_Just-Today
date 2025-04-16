import { ArrowLeft, SquareChevronDown, Fullscreen, Play,RotateCcw } from "lucide-react";
import ClockFace from "./ClockFace";


function TimerSetting() {
    return (
        <div className="flex flex-col px-[2rem] py-[1rem] bg-base-100 border-1 rounded-lg border-base-content">
            <div className="flex flex-row gap-[1rem] items-center">
                <ArrowLeft />
                <span>番茄鐘</span>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">
                        <p>回合</p>
                        <SquareChevronDown />
                    </div>
                    {/* 下拉選項清單 */}
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-24 p-2 shadow-sm">
                        <li><a>1</a></li>
                        <li><a>2</a></li>
                    </ul>
                </div>
            </div>
            {/* 鐘面 */}
            <ClockFace />
            {/* 操作 */}
            <div className="grid grid-cols-3">
                <div className="flex flex-col jusify-center items-center">
                    <Fullscreen />
                    <p>全螢幕</p>
                </div>
                <div className="flex flex-col jusify-center items-center">
                    <Play />
                    <p>開始</p>
                </div>
                <div className="flex flex-col jusify-center items-center">
                    <RotateCcw />
                    <p>重新計時</p>
                </div>
            </div>
        </div>
    );
}

export default TimerSetting;