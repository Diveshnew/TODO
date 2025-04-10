'use client';

import { HiOutlineTrash } from 'react-icons/hi';

const RemoveBtn = ({ id, refreshTodos }) => {
  const removeTodo = async () => {
    const confirmed = confirm('Are you sure?');
    if (!confirmed) return;

    const res = await fetch(`/api/todos?id=${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      if (typeof onAfterDelete === 'function') {
        onAfterDelete();
      }
      refreshTodos();
    }
  };

  return (
    <button
      onClick={removeTodo}
      className="text-red-200 cursor-pointer hover:text-red-500 text-xl transition-all"
    >
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
