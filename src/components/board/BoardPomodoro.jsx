import { useEffect } from "react";
import { useState } from "react";

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
        <div className="w-[70%] px-[2rem] py-[1rem] flex flex-row bg-base-100 border-1 rounded-lg border-base-content">
            <div className="min-w-[178px] max-h-[178px] flex flex-row justify-center items-center bg-base-300 rounded-full">
                <span className="countdown font-mono text-[48px] mr-[1.5rem]">
                    <span className="text-[48px]" style={{ "--value": counter } /* as React.CSSProperties */} aria-live="polite" aria-label={counter}></span>
                </span>
                <div className="relative">
                    <p className="absolute left-[-1rem] text-nowrap text-[20px]">分鐘</p>
                </div>
            </div>
            <div className="w-3/5 flex flex-col items-end text-[20px]">
                <span className="text-[32px]">番茄鐘</span>
                <p>現在時間</p>
                <p>2000 年 00 月 00 日</p>
                <p>00 : 00</p>
                <button className="btn">開始專注</button>
            </div>
        </div>
    );
}

export default BoardPomodoro;