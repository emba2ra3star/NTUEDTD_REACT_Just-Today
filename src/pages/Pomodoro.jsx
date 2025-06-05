import { Helmet } from "react-helmet-async";
import TimerSetting from "../components/pomodoro/TimerSetting";
import { Link } from "react-router";

import NavMenu from "../components/NavMenu";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

function Pomodoro() {
    return (
        <div className="main_layout text-black">
            <Helmet>
                <title>Just Today | 番茄鐘</title>
            </Helmet>

            <div className="content max-h-[calc(100vh-6rem)] mt-[5rem] flex flex-row">
                <NavMenu />
                <div className="w-6/7 h-full px-14 pb-10 flex flex-row gap-8">
                    <Chart />
                    <div className="h-full w-full flex flex-col gap-8">
                        <PomodoroSetting />
                        <LatestTask />
                    </div>
                </div>
            </div>

            <div className="footer"> </div>
        </div >
    );
}

export default Pomodoro;

function Chart() {
    return (
        <div className="h-full w-[40%] py-8 px-10 flex flex-col gap-4 border-1 rounded-[50px] border-black bg-base-100">
            {/* title */}
            <div className="flex items-center gap-1">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_269_215)">
                        <path d="M22.0937 16.5522C21.431 18.1194 20.3945 19.5004 19.0748 20.5744C17.7552 21.6485 16.1924 22.3829 14.5233 22.7135C12.8542 23.0441 11.1296 22.9607 9.50013 22.4708C7.87067 21.9808 6.38604 21.0992 5.17603 19.9029C3.96603 18.7067 3.06749 17.2322 2.55897 15.6084C2.05045 13.9847 1.94743 12.2611 2.25893 10.5883C2.57042 8.91556 3.28695 7.34457 4.34585 6.01269C5.40476 4.68082 6.77381 3.62862 8.33331 2.94808M22.9166 12.5002C22.9166 11.1322 22.6472 9.77768 22.1237 8.51388C21.6002 7.25007 20.8329 6.10174 19.8657 5.13447C18.8984 4.16719 17.7501 3.3999 16.4863 2.87642C15.2225 2.35293 13.8679 2.0835 12.5 2.0835V12.5002H22.9166Z" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_269_215">
                            <rect width="25" height="25" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <h1 className="text-2xl/12 font-bold">時數統計</h1>
            </div>

            {/* content */}
            <div className="h-full flex flex-col justify-between">
                {/* 本週工作時數直條圖 */}
                <div className="h-[30%] grid grid-cols-7">
                    <div className="h-full w-2 bg-black/20 rounded-t-full justify-self-center"></div>
                    <div className="h-full w-2 bg-black/20 rounded-t-full justify-self-center"></div>
                    <div className="h-full w-2 bg-black/20 rounded-t-full justify-self-center"></div>
                    <div className="h-full w-2 bg-black/20 rounded-t-full justify-self-center"></div>
                    <div className="h-full w-2 bg-black/20 rounded-t-full justify-self-center"></div>
                    <div className="h-full w-2 bg-black/20 rounded-t-full justify-self-center"></div>
                    <div className="h-full w-2 bg-black rounded-t-full justify-self-center"></div>
                </div>

                {/* 今日工作時數 */}
                <div className="w-full flex flex-row justify-between items-center text-base">
                    <p>您今天已經工作</p>
                    <p className="text-2xl">{0}</p>
                    <p>小時</p>
                </div>

                {/* 分隔線 */}
                <hr className="border-t-3 border-dashed border-gray-400" />

                {/* 今日工作完成度圓餅圖 */}
                <div className="h-[30%] flex justify-center items-center">
                    <div className="h-full aspect-square flex items-center justify-center border-4 border-black/10 rounded-full">
                        <p className="text-5xl/12 font-bold">25</p>
                    </div>
                </div>

                {/* 完成工作數量 */}
                <div className="w-full flex flex-row justify-between items-center text-base">
                    <p>完成的工作數量</p>
                    <p className="text-2xl">{0}</p>
                    <p>份</p>
                </div>
            </div>
        </div>
    );
}

function PomodoroSetting() {
    return (
        <div className="w-full py-8 px-10 flex flex-col gap-4 border-1 rounded-[50px] border-black bg-base-100">
            {/* title */}
            <div className="flex flex-row justify-between">
                <div className="flex items-center gap-1">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_269_192)">
                            <path d="M12.5 6.25016V12.5002L16.6667 14.5835M22.9167 12.5002C22.9167 18.2531 18.253 22.9168 12.5 22.9168C6.74707 22.9168 2.08337 18.2531 2.08337 12.5002C2.08337 6.7472 6.74707 2.0835 12.5 2.0835C18.253 2.0835 22.9167 6.7472 22.9167 12.5002Z" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_269_192">
                                <rect width="25" height="25" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <h1 className="text-2xl/12 font-bold">番茄鐘設定</h1>
                </div>
                {/* 現在時間 */}
                <div className="mb-2 flex flex-row self-end text-sm gap-2">
                    <p>現在時間：</p>
                    <p>0000 年 00 月 00 日</p>
                    <p>下午 00:00</p>
                </div>
            </div>
            {/* 鐘面 */}
            <div className="tabs tabs-border">
                <input type="radio" name="my_tabs_2" className="tab" aria-label="專注時間" defaultChecked />
                <div className="px-6 tab-content border-px border-black/30 rounded-lg">
                    <div className="w-full h-full flex flex-row items-center justify-center">
                        {/* 增減按鈕 */}
                        <div className="flex flex-col justify-between items-center gap-2">
                            <button className="btn btn-square bg-black/10">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 3.3335V12.6668M3.33333 8.00016H12.6667" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button className="btn btn-square bg-black/10">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33333 8H12.6667" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        {/* 時刻 */}
                        <div className="mx-[30%] text-6xl font-bold">TIME</div>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" className="tab" aria-label="小休息" />
                <div className="px-6 tab-content border-px border-black/30 rounded-lg">
                    <div className="w-full h-full flex flex-row items-center justify-center">
                        {/* 增減按鈕 */}
                        <div className="flex flex-col justify-between items-center gap-2">
                            <button className="btn btn-square bg-black/10">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 3.3335V12.6668M3.33333 8.00016H12.6667" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button className="btn btn-square bg-black/10">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33333 8H12.6667" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        {/* 時刻 */}
                        <div className="mx-[30%] text-6xl font-bold">TIME</div>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" className="tab" aria-label="大休息" />
                <div className="px-6 tab-content border-px border-black/30 rounded-lg">
                    <div className="w-full h-full flex flex-row items-center justify-center">
                        {/* 增減按鈕 */}
                        <div className="flex flex-col justify-between items-center gap-2">
                            <button className="btn btn-square bg-black/10">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 3.3335V12.6668M3.33333 8.00016H12.6667" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button className="btn btn-square bg-black/10">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33333 8H12.6667" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        {/* 時刻 */}
                        <div className="mx-[30%] text-6xl font-bold">TIME</div>
                    </div>
                </div>
            </div>
            {/* 按鈕 */}
            <div className="mt-8 flex flex-row justify-between items-center ">
                <div className="w-1/3 flex justify-center">
                    <button className="btn bg-white border-black">
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.94444 2H3.27778C2.80628 2 2.3541 2.1873 2.0207 2.5207C1.6873 2.8541 1.5 3.30628 1.5 3.77778V6.44444M17.5 6.44444V3.77778C17.5 3.30628 17.3127 2.8541 16.9793 2.5207C16.6459 2.1873 16.1937 2 15.7222 2H13.0556M13.0556 18H15.7222C16.1937 18 16.6459 17.8127 16.9793 17.4793C17.3127 17.1459 17.5 16.6937 17.5 16.2222V13.5556M1.5 13.5556V16.2222C1.5 16.6937 1.6873 17.1459 2.0207 17.4793C2.3541 17.8127 2.80628 18 3.27778 18H5.94444" stroke="#757575" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p>全螢幕</p>
                    </button>
                </div>
                <div className="w-1/3 flex justify-center">
                    <button className="btn bg-neutral text-white">
                        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 2L14.5 10L2.5 18V2Z" stroke="#B3B3B3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p>開始專注</p>
                    </button>
                </div>
                <div className="w-1/3 flex justify-center">
                    <button className="btn bg-white border-black">
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1744 2L11.1744 2M11.1744 2V6.80034M11.1744 2L14.8078 5.71226C15.9566 6.81707 16.7003 8.2504 16.9268 9.79629C17.1534 11.3422 16.8505 12.9169 16.0638 14.2831C15.2771 15.6494 14.0492 16.7332 12.5652 17.3712C11.0811 18.0092 9.42132 18.1669 7.83581 17.8205C6.2503 17.4741 4.825 16.6424 3.77466 15.4507C2.72431 14.2589 2.10583 12.7718 2.0124 11.2132C1.91896 9.65469 2.35564 8.10921 3.25664 6.80966C4.15764 5.51012 5.47414 4.52689 7.00778 4.00814" stroke="#757575" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p>重新計時</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

function LatestTask() {
    const [openId, setOpenId] = useState(null);
    const toggleCard = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };
    
    // Redux
    const dispatch = useDispatch();
    const todayList = useSelector(state => state.todayList);
    // 切換任務完成狀態
    // const toggleIsDone = (id) => {
    //     try {
    //         dispatch(toggleIsDone(id));
    //     } catch (error) {
    //         console.error("Error toggling task:", error);
    //     }
    // }

    return (
        <div className="h-full flex flex-col gap-4 py-8 px-10 flex-1 border-1 rounded-[50px] border-black bg-base-100">
            {/* title */}
            <div className="flex items-center gap-1">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33333 6.25H21.875M8.33333 12.5H21.875M8.33333 18.75H21.875M3.125 6.25H3.13542M3.125 12.5H3.13542M3.125 18.75H3.13542" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <h1 className="text-2xl/12 font-bold">最近的工作項目</h1>
            </div>

            {/* list */}
            <div className="flex-1 overflow-y-auto">
                {todayList.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col"
                    >
                        <div
                            className="flex flex-row hover:bg-black/10 cursor-pointer items-stretch"
                            onClick={() => toggleCard(index)}
                        >
                            {/* 時間 */}
                            <div className={`mr-3 flex flex-col items-center ${openId === index ? "text-base" : "text-sm"}`}>
                                <p>{item.startTime}</p>
                                <div className="w-[1px] h-full bg-black/20" />
                                <p>{item.endTime}</p>
                            </div>
                            {/* 內容 */}
                            <div className="flex flex-col justify-center gap-2">
                                <h2 className="pl-3 text-base/8 border-l-8">{item.title}</h2>
                                <div className={`overflow-hidden transition-[max-height] duration-300 easy-in ${openId === index ? "max-h-40" : "max-h-0"}`}>
                                    <div className="text-sm/8 text-black/50">{item.note}</div>
                                </div>
                            </div>
                        </div>
                        {index < todayList.length - 1 && (<div className="w-full h-px my-3 bg-black/30"></div>)}
                    </div>
                ))}
            </div>
        </div>
    );
}

function ProgressBars() {
    return (
        <div className="grid grid-cols-3 mt-[1rem] px-[4rem] py-[2rem] bg-base-100 border-1 rounded-lg border-base-content">
            <div className="col-span-2 grid grid-cols-3 justify-center items-center text-[25px]">
                <p className="col-span-3 text-center px-[4rem] mb-[-1rem]">
                    已完成
                    <span className="text-[96px] mx-[4rem]">2</span>
                    項 工作
                </p>
                <progress
                    className="col-span-3 progress text-[#8FE189]"
                    value="50"
                    max="100"
                >
                </progress>
            </div>
            <div
                className="col-span-1 radial-progress justify-self-center text-[#8FE189] flex flex-col justify-center items-center text-[20px]"
                style={{
                    "--value": 20,
                    "--size": "10rem",
                } /* as React.CSSProperties */}
                aria-valuenow={20}
                role="progressbar"
            >
                <span className="text-base-content">2hr</span>
                <span className="text-base-content">累積時數</span>
            </div>
        </div>
    );
}