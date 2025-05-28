import { Helmet } from "react-helmet-async";

import Board from "../components/board/Board";
import NavMenu from "../components/NavMenu";
import { useState } from "react";

function Home() {
    return (
        <div className="main_layout">
            <Helmet>
                <title>Just Today | 首頁</title>
            </Helmet>
            <div className="content mt-[5rem] flex flex-row">
                <NavMenu />
                <div className="w-6/7 h-full px-14 pb-10 flex flex-row gap-8">
                    <TodayList />
                    <div className="flex flex-col">
                        <TimeLine />
                        <div className="flex flex-row gap-8">
                            <AddTask />
                            <Timer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

function TodayList() {
    const [openId, setOpenId] = useState(null);
    const toggleCard = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    const [todayList, setTodayList] = useState([
        { title: "工作1", color: "#fff", isDone: true, startTime: "09:00", endTime: "10:00", note: "這是工作1的備註" },
        { title: "工作2", color: "#fff", isDone: false, startTime: "09:00", endTime: "10:00", note: "這是工作2的備註" },
        { title: "工作2", color: "#fff", isDone: false, startTime: "09:00", endTime: "10:00", note: "這是工作2的備註" },
        { title: "工作2", color: "#fff", isDone: false, startTime: "09:00", endTime: "10:00", note: "這是工作2的備註" },
        { title: "工作2", color: "#fff", isDone: false, startTime: "09:00", endTime: "10:00", note: "這是工作2的備註" },
        { title: "工作2", color: "#fff", isDone: false, startTime: "09:00", endTime: "10:00", note: "這是工作2的備註" },
        { title: "工作2", color: "#fff", isDone: false, startTime: "09:00", endTime: "10:00", note: "這是工作2的備註" },
        { title: "工作2", color: "#fff", isDone: false, startTime: "09:00", endTime: "10:00", note: "這是工作2的備註" },
        { title: "工作2", color: "#fff", isDone: false, startTime: "09:00", endTime: "10:00", note: "這是工作2的備註" },
    ]);
    const toggleIsDone = (id) => {
        setTodayList((prev) =>
            prev.map((item, index) =>
                index === id ? { ...item, isDone: !item.isDone } : item
            )
        );
    };

    return (
        <div className="max-h-[calc(100vh-8.5rem)] h-full w-[50%] py-8 px-10 flex flex-col gap-4 border-1 rounded-[50px] border-black bg-base-100">
            {/* title */}
            <div className="flex items-center gap-1">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33333 6.25H21.875M8.33333 12.5H21.875M8.33333 18.75H21.875M3.125 6.25H3.13542M3.125 12.5H3.13542M3.125 18.75H3.13542" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <h1 className="text-2xl/12 font-bold">今日行程</h1>
            </div>

            {/* list */}
            <div className="flex flex-col overflow-y-auto">
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
                                <h2 className="pl-3 text-base/8 border-l-8">{todayList[0].title}</h2>
                                <div className={`overflow-hidden transition-[max-height] duration-300 easy-in ${openId === index ? "max-h-40" : "max-h-0"}`}>
                                    <div className="text-sm/8 text-black/50">{item.note}</div>
                                </div>
                            </div>
                            {/* 勾選 */}
                            <div className="ml-auto flex items-center">
                                <input
                                    type="checkbox"
                                    checked={item.isDone}
                                    onChange={() => { toggleIsDone(index); }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="checkbox mr-2"
                                />
                            </div>
                        </div>
                        {index < todayList.length - 1 && (<div className="w-full h-px my-3 bg-black/30"></div>)}
                    </div>
                ))}
            </div>
        </div>
    );
}

function TimeLine() {
    return (
        <div className="pb-8 px-10 flex flex-col items-start gap-4 text-base">
            {/* title */}
            <div className="flex flex-row justify-center items-center gap-1">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_217_702)">
                        <path d="M1.09375 12.5002H7.29167M17.7187 12.5002H23.9167M16.6667 12.5002C16.6667 14.8013 14.8012 16.6668 12.5 16.6668C10.1988 16.6668 8.33333 14.8013 8.33333 12.5002C8.33333 10.199 10.1988 8.3335 12.5 8.3335C14.8012 8.3335 16.6667 10.199 16.6667 12.5002Z" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_217_702">
                            <rect width="25" height="25" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <h1 className="text-2xl/12 font-bold">時間軸</h1>
            </div>

            <div className="relative mt-4 w-full grid grid-cols-12 gap-4">
                {/* boat */}
                <div className="absolute top-[-50%] flex flex-col items-center">
                    <p>08:00</p>
                    <svg width="99" height="46" viewBox="0 0 99 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M49 0L68.9186 27H29.0814L49 0Z" fill="#EDEDED" />
                        <path d="M49 18H99L72.4375 46H49V18Z" fill="#D9D9D9" />
                        <path d="M49 18H0L26.0312 46H49V18Z" fill="#D9D9D9" />
                    </svg>
                </div>
                {/* flag */}
                <section className="flex flex-col items-center z-1">
                    <svg width="38" height="50" viewBox="-29 0 67 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 36.5L0 0L38 20.8791L3.5 35V50L0 50L0 36.5Z" fill="black" />
                        <path d="M0 36.5L0 0L38 20.8791L3.5 35L0 36.5Z" fill="#D9D9D9" />
                    </svg>
                    <p>09:00</p>
                </section>
                {/* Line */}
                <div className="absolute top-[50%] w-full h-2 bg-black rounded-full"></div>

            </div>

        </div>
    );
}

function AddTask() {
    return (
        <div className="py-8 px-10 flex flex-col gap-4 border-1 rounded-[50px] border-black bg-base-100">
            <div className="flex flex-row items-center gap-1">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 5.2085V19.7918M5.20831 12.5002H19.7916" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h1 className="text-2xl/12 font-bold">新增工作</h1>
            </div>
            <div className="flex flex-col gap-4">
                <input type="text" placeholder="工作項目" className="input w-full" />
                <div className="flex flex-row gap-4">
                    <div className="min-w-[4rem] flex flex-col">
                        <p>開始時間</p>
                        <input type="text" placeholder="00:00" className="input" />
                    </div>
                    <p className="self-center">~</p>
                    <div className="min-w-[4rem] flex flex-col">
                        <p>結束時間</p>
                        <input type="text" placeholder="00:00" className="input" />
                    </div>
                    <p className="self-end text-sm text-black/50">1h</p>
                </div>
                <textarea className="textarea w-full" placeholder="備註"></textarea>
                <button className="btn btn-neutral">新增工作</button>
            </div>
        </div>
    );
}

function Timer() {
    return (
        <div className="w-full py-8 px-10 flex flex-col gap-4 border-1 rounded-[50px] border-black bg-base-100">
            <div className="flex flex-row items-center gap-1">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_232_397)">
                        <path d="M12.5 6.25016V12.5002L16.6666 14.5835M22.9166 12.5002C22.9166 18.2531 18.2529 22.9168 12.5 22.9168C6.74701 22.9168 2.08331 18.2531 2.08331 12.5002C2.08331 6.7472 6.74701 2.0835 12.5 2.0835C18.2529 2.0835 22.9166 6.7472 22.9166 12.5002Z" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_232_397">
                            <rect width="25" height="25" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <h1 className="text-2xl/12 font-bold">番茄鐘</h1>
            </div>
            <div className="flex flex-col">
                <p>開始時間</p>
                <div className="py-5 px-12 border-1 border-black/20 rounded-lg flex justify-center items-center">
                    <div className="w-full aspect-square flex items-center justify-center border-4 border-black/10 rounded-full">
                        <p className="text-5xl/12 font-bold">25</p>
                    </div>
                </div>
            </div>
            <button className="btn btn-neutral">開始專注</button>
        </div>
    );
}

function OldOne() {
    <div className="main_layout">
        <Helmet>
            <title>Just Today | 首頁</title>
        </Helmet>
        <Board />
        <div className="footer bg-base-100"> </div>
    </div>
}