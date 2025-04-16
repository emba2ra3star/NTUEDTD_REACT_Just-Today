import Board from "../components/board/Board";


function Home() {
    return (
        <div className="main_layout">
            <div className="header">header</div>
            <Board />            
            <div className="footer">footer</div>
        </div>
    );
}

export default Home;