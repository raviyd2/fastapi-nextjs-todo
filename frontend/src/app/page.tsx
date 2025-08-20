'use client';

import { useState } from 'react';
import TodoList from '@/components/TodoList';
import { ClipboardList, Users, Activity } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'todos' >('todos');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Activity className="w-8 h-8 text-indigo-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">Management Dashboard</h1>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('todos')}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'todos'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <ClipboardList className="w-4 h-4 mr-2" />
                Todos
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'todos' ? <TodoList /> : null}
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-500">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
