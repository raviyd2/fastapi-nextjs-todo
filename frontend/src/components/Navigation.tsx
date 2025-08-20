'use client';

import { useState } from 'react';
import { ClipboardList, Users, Activity } from 'lucide-react';

export default function Navigation() {
  const [activeTab, setActiveTab] = useState<'todos'>('todos');

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('todos')}
              className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
                activeTab === 'todos'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ClipboardList className="w-5 h-5 mr-2" />
              Todos
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
