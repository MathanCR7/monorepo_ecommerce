// frontend/admin/src/App.tsx
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  role: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // ... (the fetch logic remains the same) ...
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');
        if (!response.ok) throw new Error('Network response was not ok');
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users. Is the backend running?');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Panel (React + Vite)</h1>
        <p className="text-gray-600 mb-8">This page fetches data from the Express backend.</p>

        <div className="bg-white rounded-lg shadow-md p-6">
          {loading && <p className="text-gray-500">Loading users...</p>}
          {error && <p className="text-red-600 font-semibold">{error}</p>}
          
          {users.length > 0 && (
            <ul className="divide-y divide-gray-200">
              {users.map((user) => (
                <li key={user.id} className="py-4 flex items-center justify-between">
                  <div>
                    <strong className="text-lg text-gray-900">{user.name}</strong>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {user.role}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;