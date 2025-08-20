'use client';

import { useState, useEffect } from 'react';
import { Todo, todoApi } from '@/lib/api';
import { Plus, Edit, Trash2, Check, X } from 'lucide-react';

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const data = await todoApi.getAll();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError('Failed to load todos');
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    try {
      const todo = await todoApi.create(newTodo.trim());
      setTodos([...todos, todo]);
      setNewTodo('');
      setError(null);
    } catch (err) {
      setError('Failed to add todo');
    }
  };

  const handleToggleComplete = async (todo: Todo) => {
    try {
      const updated = await todoApi.update(todo.id, todo.title, !todo.completed);
      setTodos(todos.map(t => t.id === todo.id ? updated : t));
    } catch (err) {
      setError('Failed to update todo');
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await todoApi.delete(id);
      setTodos(todos.filter(t => t.id !== id));
    } catch (err) {
      setError('Failed to delete todo');
    }
  };

  const handleEditTodo = async (id: number) => {
    if (!editText.trim()) return;

    try {
      const todo = todos.find(t => t.id === id);
      if (!todo) return;

      const updated = await todoApi.update(id, editText.trim(), todo.completed);
      setTodos(todos.map(t => t.id === id ? updated : t));
      setEditingId(null);
      setEditText('');
    } catch (err) {
      setError('Failed to update todo');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Todo Management</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleAddTodo} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </form>

        <div className="space-y-2">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo)}
                className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
              />
              
              {editingId === todo.id ? (
                <div className="flex-1 flex gap-2">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 px-2 py-1 border border-gray-300 rounded"
                    autoFocus
                  />
                  <button
                    onClick={() => handleEditTodo(todo.id)}
                    className="text-green-600 hover:text-green-700"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setEditingId(null);
                      setEditText('');
                    }}
                    className="text-red-600 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <>
                  <span
                    className={`flex-1 ${
                      todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
                    }`}
                  >
                    {todo.title}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditingId(todo.id);
                        setEditText(todo.title);
                      }}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteTodo(todo.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {todos.length === 0 && (
          <p className="text-center text-gray-500 py-8">No todos yet. Add one above!</p>
        )}
      </div>
    </div>
  );
}
