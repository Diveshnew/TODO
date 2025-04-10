'use client';

import { BsFileEarmarkPlus } from 'react-icons/bs';

const AddBtn = ({ refreshTodos }) => {
  const handleCreate = async () => {
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Change the Title here',
        description: 'Change the description',
      }),
    });

    if (res.ok) {
      refreshTodos(); // Fetch latest list
    }
  };

  return (
    <button
      onClick={handleCreate}
      className="flex items-center gap-2 bg-gray-700 text-white py-2 px-4 rounded shadow hover:bg-gray-900 transition duration-200"
    >
      <BsFileEarmarkPlus className="text-lg cursor-pointer" />
      <span className="cursor-pointer">TODO</span>
    </button>
  );
};

export default AddBtn;
