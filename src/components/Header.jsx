import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { User2 } from "lucide-react"; // 未登入用 icon

function Header({ title }) {
  const [isHidden, setIsHidden] = useState(false);
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
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow transition-transform duration-300 ${isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
    >
      <div className='py-4 px-14 text-black flex justify-between items-center'>
        <Logo />

        <div className='flex items-center gap-4'>
          <div className='p-2 flex items-center gap-1 border-1 rounded-2xl'>
            <Link to={'/'}>登入</Link>
            <p>/</p>
            <Link to={'/'}>註冊</Link>
          </div>

          <Avatar />
        </div>
      </div>
    </header>
  );
}

// Logo
function Logo() {
  return (
    <Link to={"/"}>
      <p className='text-2xl text'>JUST TODAY</p>
    </Link>
  );
}

// user頭像
function Avatar() {
  return (
    <div className='w-10 h-10 rounded-full overflow-hidden border-1 border-black'>
      <div className="flex items-center justify-center w-full h-full bg-white">
        <User2 className="text-black" />
      </div>
    </div>
  );
}

export default Header;
