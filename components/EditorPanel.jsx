'use client';

import dynamic from 'next/dynamic';
import 'easymde/dist/easymde.min.css';
import RemoveBtn from './RemoveBtn';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
});

const EditorPanel = ({
  title,
  description,
  onTitleChange,
  onDescriptionChange,
  id,
  refreshTodos,
}) => {
  // Save updated content to DB
  const saveChanges = async () => {
    if (!id) return;
    await fetch(`/api/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    });
    refreshTodos(); // refresh the list after saving
  };

  return (
    <section className="w-[652px] h-[736px] bg-white p-6 rounded-lg shadow-sm flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Edit Todo</h2>
        <RemoveBtn id={id} refreshTodos={refreshTodos} />
      </div>

      {/* Title Input */}
      <input
        type="text"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        onBlur={saveChanges}
        placeholder="Enter title..."
        className="text-lg font-semibold border-b border-gray-300 p-2 mb-4 outline-none"
      />

      {/* Markdown Editor */}
      <SimpleMDE
        value={description}
        onChange={(value) => {
          onDescriptionChange(value);
          saveChanges(); // autosave on change
        }}
        className="flex-1"
      />
    </section>
  );
};

export default EditorPanel;
