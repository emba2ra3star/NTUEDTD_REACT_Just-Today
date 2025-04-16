import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ title }) {
  const [isHidden, setIsHidden] = useState(false); // ✅ 拼字修正
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > prevScrollY && currentY > 30) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setPrevScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Link to="/">
        <h2 className="text-2xl font-bold text-black py-4 text-center">{title}</h2>
      </Link>
    </header>
  );
}

export default Header;
