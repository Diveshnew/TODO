import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 flex justify-between items-center bg-white px-8 py-3 z-50">
      <Link className="text-black font-bold" href="/">
        TODO
      </Link>
    </nav>
  );
};

export default Navbar;
