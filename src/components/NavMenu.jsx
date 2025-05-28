import { Link, useLocation } from "react-router";

function NavMenu() {
    const pageTitle = useLocation();
    const navList = [
        { name: "今日事項", path: "/" },
        { name: "待辦事項", path: "/TodoList" },
        { name: "番茄鐘", path: "/Pomodoro" },
        { name: "摸魚", path: "/fishgame" },
        { name: "設定", path: "/settings" },
        { name: "關於我們", path: "/aboutus" },
    ]

    return (
        <div className="w-1/7 min-w-[210px] h-[calc(screen-5rem)] pb-11 flex flex-col justify-between">
            <div className="flex flex-col gap-2">
                {navList.slice(0, 4).map((item, index) => (
                    <Link
                        to={item.path}
                        key={index}
                        className={`pl-[92px] py-2 pr-4 rounded-r-lg w-full ${pageTitle.pathname == item.path ? "bg-gray-400" : "bg-white"} hover:bg-gray-300 text-2xl`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-2">
                {navList.slice(-2).map((item, index) => (
                    <Link
                        to={item.path}
                        key={index}
                        className={`pl-[92px] py-2 pr-4 rounded-r-lg w-full ${pageTitle.pathname == item.path ? "bg-gray-400" : "bg-white"} hover:bg-gray-300 text-2xl`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default NavMenu;