import { Link } from 'react-router-dom';

function Home() {
  return (
  <div>
      <h1>首頁</h1>
      <Link to="/about">前往 About 頁面</Link>
    </div>
  );
}

export default Home;
