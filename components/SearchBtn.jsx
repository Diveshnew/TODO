import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';

const SearchBtn = () => {
  return (
    <div>
      <Link
        href="/search"
        className="flex items-center justify-center bg-white p-2 rounded shadow hover:bg-gray-200 transition duration-200"
      >
        <FiSearch className="text-xl text-black" />
      </Link>
    </div>
  );
};

export default SearchBtn;
