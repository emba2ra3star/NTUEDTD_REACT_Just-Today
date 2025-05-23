import { Helmet } from "react-helmet-async";
import TimerSetting from "../components/pomodoro/TimerSetting";
import { Link } from "react-router";

function Pomodoro() {
    return (
        <div className="main_layout">
            <Helmet>
                <title>Just Today | 番茄鐘</title>
            </Helmet>
            
            <div className="content mt-[4rem] mx-auto">
                
            </div>
            
            <div className="footer"> </div>
        </div >
    );
}

export default Pomodoro;

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