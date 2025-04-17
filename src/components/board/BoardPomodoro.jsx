import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";

function BoardPomodoro() {
    // 倒數計時器
    const [counter, setCounter] = useState(25);
    useEffect(() => {
        if (counter <= 0) return;

        const timer = setInterval(() => {
            setCounter(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer); // 清除定時器，避免記憶體洩漏
    }, [counter]);

    return (
        <Link to={"/Pomodoro"} className="sm:w-[70%]">
            <div className="px-[2rem] py-[1rem] flex flex-col sm:flex-row justify-center items-center bg-base-100 border-1 rounded-lg border-base-content">
                <div className="w-[178px] h-[178px] mb-2 flex flex-row justify-center items-center bg-base-300 rounded-full">
                    <span className="countdown font-mono text-[48px] mr-[1.5rem]">
                        <span className="text-[48px]" style={{ "--value": counter } /* as React.CSSProperties */} aria-live="polite" aria-label={counter}></span>
                    </span>
                    <div className="relative">
                        <p className="absolute left-[-1rem] text-nowrap text-[20px]">分鐘</p>
                    </div>
                </div>
                <div className="sm:w-3/5 flex flex-col items-center sm:items-end text-[14px] sm:text-[20px]">
                    <span className="text-[20px] sm:text-[32px]">番茄鐘</span>
                    <div className="flex flex-row gap-2 sm:flex-col sm:gap-0 sm:items-end">
                        <p>現在時間</p>
                        <p>2000 年 00 月 00 日</p>
                        <p>00 : 00</p>
                    </div>
                    <button className="btn">開始專注</button>
                </div>
            </div>
        </Link>
    );
}

export default BoardPomodoro;