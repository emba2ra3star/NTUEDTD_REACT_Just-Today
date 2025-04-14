import { Link } from "react-router";

function Header({ title }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 flex justify-center items-center h-16 shadow">
      <Link to="/">
        <h2 className="text-2xl font-bold text-black">{title}</h2>
      </Link>
    </header>
  );
}

export default Header;
