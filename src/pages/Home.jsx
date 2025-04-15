import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-start gap-4 p-4">
      <h1 className="text-2xl font-bold">首頁</h1>

      <Link to="/about" className="btn btn-outline">
        前往 About 頁面
      </Link>

      <Link to="/fishgame" className="btn btn-primary">
        開始玩魚魚遊戲 🐟
      </Link>
    </div>
  );
}

export default Home;
