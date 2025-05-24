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
            <div className="content mt-[5rem] flex flex-row items-center">
                <NavMenu />
                <div className="w-6/7 h-full px-14 pb-10">
                    <TodayList />
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
    ]);
    const toggleIsDone = (id) => {
        setTodayList((prev) =>
            prev.map((item, index) =>
                index === id ? { ...item, isDone: !item.isDone } : item
            )
        );
    };

    return (
        <div className="h-full py-8 px-10 flex flex-col gap-4 border-1 rounded-[50px] border-black bg-base-100">
            {/* title */}
            <div className="flex items-center gap-1">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33333 6.25H21.875M8.33333 12.5H21.875M8.33333 18.75H21.875M3.125 6.25H3.13542M3.125 12.5H3.13542M3.125 18.75H3.13542" stroke="#1E1E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h1 className="text-2xl/12 font-bold">今日行程</h1>
            </div>

            {/* list */}
            <div className="flex flex-col">
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
                                <div className="w-px h-full bg-black/20" />
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
                                    className="checkbox"
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

function OldOne() {
    <div className="main_layout">
        <Helmet>
            <title>Just Today | 首頁</title>
        </Helmet>
        <Board />
        <div className="footer bg-base-100"> </div>
    </div>
}