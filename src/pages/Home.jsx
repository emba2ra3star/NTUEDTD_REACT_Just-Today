import { Helmet } from "react-helmet-async";

import Board from "../components/board/Board";


function Home() {
    return (
        <div className="main_layout">
            <Helmet>
                <title>Just Today | 首頁</title>
            </Helmet>
            <Board />            
            <div className="footer bg-base-100">footer</div>
        </div>
    );
}

export default Home;
