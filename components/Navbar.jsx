import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 flex justify-between items-center bg-white px-8 py-3 z-50">
      <Link
        href="/"
        className="flex items-center space-x-2 text-black font-bold"
      >
        <Image src="/logo.png" alt="Logo" width={30} height={30} />
        <span>TODO</span>
      </Link>
    </nav>
  );
};

export default Navbar;
