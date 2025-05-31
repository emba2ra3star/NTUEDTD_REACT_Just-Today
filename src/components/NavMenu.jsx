import { Link, useLocation } from "react-router";

function NavMenu() {
    const pageTitle = useLocation();
    const navList = [
        { name: "今日事項", path: "/", id: "nav-today" },
        { name: "待辦事項", path: "/TodoList", id: "nav-todo" },
        { name: "番茄鐘", path: "/Pomodoro", id: "nav-pomodoro" },
        { name: "摸魚", path: "/fishgame", id: "nav-fish" },
        { name: "設定", path: "/settings", id: "nav-setting" },
        { name: "關於我們", path: "/aboutus", id: "nav-about" },
    ]

    return (
        <nav className="min-w-[210px] h-[calc(screen-5rem)] pb-11 flex flex-col justify-between">
            <div className="flex flex-col gap-2">
                {navList.slice(0, 4).map((item, index) => (
                    <Link
                        to={item.path}
                        key={index}
                        id={item.id}
                        className={`pl-[92px] py-2 pr-4 rounded-r-lg w-full ${pageTitle.pathname === item.path ? "bg-gray-400" : "bg-white"} hover:bg-gray-300 text-2xl`}
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
                        id={item.id}
                        className={`pl-[92px] py-2 pr-4 rounded-r-lg w-full ${pageTitle.pathname === item.path ? "bg-gray-400" : "bg-white"} hover:bg-gray-300 text-2xl`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default NavMenu;