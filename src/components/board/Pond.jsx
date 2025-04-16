import { Link } from "react-router";

function Pond() {
    return (
        <>
            <Link to="/fishgame" className="w-[30%] px-[2rem] py-[1rem] flex justify-center items-center bg-base-100 border-1 rounded-lg border-base-content">
                <p>魚塘</p>
            </Link>
        </>
    );
}

export default Pond;