import { Link } from "react-router";

import AddTodayItem from "./AddTodayItem";
import BoardPomodoro from "./BoardPomodoro";
import BoardTodoList from "./BoardTodoList";
import TodayList from "./TodayList";

function Board() {
    return (
        <div className="content mt-[3rem]">
            <div className="flex flex-row mx-[5%] gap-[35px]">
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

function Pond() {
    return (
        <>
            <Link to="/fishgame" className="w-[30%] px-[2rem] py-[1rem] flex justify-center items-center bg-base-100 border-1 rounded-lg border-base-content">
                <p>魚塘</p>
            </Link>
        </>
    );
}