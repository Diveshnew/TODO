'use client';

import React, { useState, useEffect } from 'react';
import TodoList from '@/components/TodoList';
import EditorPanel from '@/components/EditorPanel';
import AddBtn from '@/components/AddBtn';
import SearchBtn from '@/components/SearchBtn';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showEditorOnMobile, setShowEditorOnMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fetchTodos = async () => {
    const res = await fetch(`/api/todos?page=${page}&limit=5`);
    const data = await res.json();
    setTodos(data.todos);
    setTotalPages(data.totalPages);

    if (!selectedTodo && data.todos.length > 0) {
      handleTodoClick(data.todos[0]);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [page]);

  useEffect(() => {
    if (selectedTodoId) {
      const timeout = setTimeout(() => {
        fetch(`/api/todos/${selectedTodoId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, description }),
        }).then(() => fetchTodos());
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [title, description]);

  const handleTodoClick = (todo) => {
    setSelectedTodo(todo);
    setSelectedTodoId(todo._id);
    setTitle(todo.title);
    setDescription(todo.description);

    if (isMobile) {
      setShowEditorOnMobile(true);
    }
  };

  const handleBack = () => {
    setShowEditorOnMobile(false);
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row gap-6 pt-6 px-4 lg:px-0 max-w-[1125px] mx-auto">
      {/* Todo List */}
      {(!isMobile || !showEditorOnMobile) && (
        <div className="w-full lg:w-[500px] space-y-4 mt-4">
          <div className="flex justify-between">
            <AddBtn refreshTodos={fetchTodos} />
            <SearchBtn />
          </div>

          <div className="space-y-2">
            {todos.map((todo) => (
              <div key={todo._id} onClick={() => handleTodoClick(todo)}>
                <TodoList
                  title={todo.title || 'Untitled'}
                  description={todo.description || ''}
                  date={new Date(todo.createdAt).toLocaleDateString()}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <button
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
              className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((prev) => prev + 1)}
              className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Editor Panel */}
      {selectedTodo && (!isMobile || showEditorOnMobile) && (
        <div className="relative w-full lg:w-[652px] mt-4 lg:mt-0">
          {isMobile && showEditorOnMobile && (
            <div className="mb-2">
              <button
                onClick={handleBack}
                className="bg-gray-200 px-4 py-2 rounded shadow mb-2"
              >
                ← Back to List
              </button>
            </div>
          )}
          <EditorPanel
            title={title}
            description={description}
            onTitleChange={setTitle}
            onDescriptionChange={setDescription}
            id={selectedTodoId}
            refreshTodos={fetchTodos}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
