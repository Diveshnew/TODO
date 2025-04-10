'use client';

const TodoList = ({ title, description, date }) => {
  return (
    <div className="border border-gray-200 bg-white hover:border-black transition duration-200 p-4 rounded shadow flex flex-col">
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
      <div className="mt-auto flex justify-end">
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
    </div>
  );
};

export default TodoList;
