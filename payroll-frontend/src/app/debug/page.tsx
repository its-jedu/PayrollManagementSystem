'use client';

import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

export default function DebugPage() {
  const { isAuthenticated, isLoading, user, checkAuth } = useAuth();

  useEffect(() => {
    console.log('Debug - Auth status:', { isAuthenticated, isLoading, user });
  }, [isAuthenticated, isLoading, user]);

  const clearStorage = () => {
    localStorage.clear();
    checkAuth();
  };

  const setFakeAuth = () => {
    localStorage.setItem('token', 'fake-token');
    localStorage.setItem('user', JSON.stringify({
      id: '1',
      email: 'test@example.com',
      user_metadata: { name: 'Test User', role: 'admin' }
    }));
    checkAuth();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Auth Debug</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <p><strong>Loading:</strong> {isLoading ? 'Yes' : 'No'}</p>
          <p><strong>Authenticated:</strong> {isAuthenticated ? 'Yes' : 'No'}</p>
          <p><strong>User:</strong> {JSON.stringify(user)}</p>
        </div>

        <div className="space-x-4">
          <button 
            onClick={setFakeAuth}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Set Fake Auth
          </button>
          <button 
            onClick={clearStorage}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Clear Storage
          </button>
          <button 
            onClick={checkAuth}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Re-check Auth
          </button>
        </div>

        <div className="mt-4">
          <h2 className="font-bold mb-2">LocalStorage Contents:</h2>
          <pre className="bg-gray-100 p-2 rounded text-sm">
            {JSON.stringify({
              token: localStorage.getItem('token'),
              user: localStorage.getItem('user')
            }, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}