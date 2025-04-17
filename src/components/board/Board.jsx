import { Link } from "react-router";

import BoardPomodoro from "./BoardPomodoro";
import TodayList from "./TodayList";

function Board() {
    return (
        <div className="content pt-[3rem] h-full">
            <div className="flex flex-row mx-[5%] gap-[35px] h-full">
                {/* 左欄 */}
                <TodayList />
                {/* 右欄 */}
                <div className="w-3/5 flex flex-col gap-[1rem]">
                    {/* 輸入工作 */}
                    <AddTodayItem />
                    {/* 魚塘與番茄鐘 */}
                    <div className="flex flex-row gap-[1rem] h-fit">
                        <Pond />
                        <BoardPomodoro />
                    </div>
                    {/* 代辦事項 */}
                    <BoardTodoList />
                </div>
            </div>
        </div>
    );
}

export default Board;

function AddTodayItem() {
    return (
        <div className="list bg-base-100  border-1 rounded-lg border-base-content">
            <div className="list-row">
                {/* 送出按鈕 */}
                <input type="checkbox" className="mt-[1.5rem] checkbox border-base-content bg-base-100 checked:bg-base-content checked:text-base-100 checked:border-base-100 " />
                {/* 事項名稱 */}
                <div className="list-col-grow min-w-[70px] flex flex-col">
                    <span>事項名稱</span>
                    <input type="text" placeholder="輸入工作項目" className="input w-full border-1 rounded-lg border-base-content" />
                </div>
                {/* 開始時間 */}
                <div className="w-[115px]">
                    <span>開始時間</span>
                    <input type="time" className="input border-1 rounded-lg border-base-content text-[14px]" />
                </div>
                {/* 結束時間 */}
                <div className="w-[115px]">
                    <span>結束時間</span>
                    <input type="time" className="input border-1 rounded-lg border-base-content text-[14px]" />
                </div>
            </div>
        </div>
    );
}

function Pond() {
    return (
        <>
            <Link to="/fishgame" className="w-[30%] px-[2rem] py-[1rem] flex justify-center items-center bg-base-100 border-1 rounded-lg border-base-content">
                <p>魚塘</p>
            </Link>
        </>
    );
}

function BoardTodoList() {
    return (
        <Link to={"/TodoList"} className="h-[100%] px-[2rem] py-[1rem] bg-base-100 border-1 rounded-lg border-base-content">
            <span>代辦事項</span>
            <section className="grid gap-[1rem]">
                <div>
                    <div className="flex flex-row gap-[1rem]">
                        <p>3/28</p>
                        <p>完成英文雜誌文章學習一篇</p>
                    </div>
                    <div className="divider my-0"></div>
                </div>
            </section>
        </Link>
    );
}