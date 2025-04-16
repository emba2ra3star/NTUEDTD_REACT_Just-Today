import { Helmet } from "react-helmet-async";
import TimerSetting from "../components/pomodoro/TimerSetting";

function Pomodoro() {
    return (
        <div className="main_layout">
            <Helmet>
                <title>Just Today | 番茄鐘</title>
            </Helmet>
            <div className="content mt-[4rem] mx-auto">
                <div className="flex flex-row gap-[4rem] justify-between items-center">
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li><a>首頁</a></li>
                            <li><a>番茄鐘</a></li>
                        </ul>
                    </div>
                    <p>現在時間 2025 年 04 月 11 日 上午 12 : 00</p>
                </div>
                {/* 番茄鐘設定區 */}
                <TimerSetting />
                {/* 進度條區 */}
                <div className="grid grid-cols-3 mt-16 px-[2rem] py-[1rem] bg-base-100 border-1 rounded-lg border-base-content">
                    <div className="col-span-2 grid grid-cols-3">
                        <p>已完成</p>
                        <span>2</span>
                        <p>項 工作</p>
                        <progress className="col-span-3 progress progress-accent" value="10" max="100"></progress>
                    </div>
                    <div className="col-span-1 radial-progress" style={{ "--value": 20 } /* as React.CSSProperties */}
                        aria-valuenow={20} role="progressbar">20%</div>
                </div>
            </div>
            <div className="footer">footer</div>
        </div>
    );
}

export default Pomodoro;