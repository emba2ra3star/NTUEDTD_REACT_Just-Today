import { ArrowLeft, SquareChevronDown, Fullscreen, Play, RotateCcw } from "lucide-react";
import ClockFace from "./ClockFace";
import { Link } from "react-router";


function TimerSetting() {
    return (
        <div className="flex flex-col px-[3rem] py-[2rem] bg-base-100 border-1 rounded-lg border-base-content">
            {/* Title */}
            <PromodoTitle />

            {/* 鐘面 */}
            <ClockFace />

            {/* 操作 */}
            <BtnBar />
        </div>
    );
}

function PromodoTitle() {
    return (
        <div className="grid grid-cols-3 gap-[1rem] items-center">
            <Link to="/" className="w-fit hover:opacity-80">
                <ArrowLeft size="48px" />
            </Link>
            <span className="mx-auto text-[48px]">番茄鐘</span>
            <div className="justify-self-end dropdown dropdown-end">
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
    );
}

function BtnBar() {
    return (
        <div className="grid grid-cols-3 mt-6 text-[20px]">
            <div className="flex flex-col jusify-center items-center">
                <Fullscreen size={"40px"} />
                <p>全螢幕</p>
            </div>
            <div className="flex flex-col jusify-center items-center">
                <Play size={"40px"} />
                <p>開始</p>
            </div>
            <div className="flex flex-col jusify-center items-center">
                <RotateCcw size={"40px"} />
                <p>重新計時</p>
            </div>
        </div>
    );
}

export default TimerSetting;