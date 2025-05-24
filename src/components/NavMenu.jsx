import { Link } from "react-router";

function NavMenu() {
    const pageTitle = "番茄鐘";
    const navList = [
        { name: "今日事項", path: "/" },
        { name: "代辦事項", path: "/" },
        { name: "番茄鐘", path: "/" },
        { name: "摸魚", path: "/" },
        { name: "設定", path: "/" },
        { name: "關於我們", path: "/" },
    ]
    
    return (
        <div className="w-1/7 min-w-[210px] h-full pb-11 flex flex-col justify-between">
            <div className="flex flex-col gap-2">
                {navList.slice(0, 4).map((item, index) => (
                    <Link
                        to={item.path}
                        key={index}
                        className={`pl-[92px] py-2 pr-4 rounded-r-lg w-full ${pageTitle == item.name ? "bg-gray-400" : "bg-white"} hover:bg-gray-300 text-2xl`}
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
                        className={`pl-[92px] py-2 pr-4 rounded-r-lg w-full ${pageTitle == item.name ? "bg-gray-400" : "bg-white"} hover:bg-gray-300 text-2xl`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default NavMenu;