// frontend/web/src/app/page.tsx
'use client'; // This directive makes it a Client Component

import { useState, useEffect } from 'react';

// Define a type for our user data for better type-safety
interface User {
  id: number;
  name: string;
  role: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Our backend is running on port 5000
        const response = await fetch('http://localhost:5000/api/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users. Is the backend running?');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // The empty array means this effect runs once on mount

  return (
    // We use Tailwind classes for layout and styling
    <main className="font-sans min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Website (Next.js)</h1>
        <p className="text-lg text-gray-600 mb-8">This page fetches data from the Express backend.</p>
        
        {/* This div replaces the one that had inline styles */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          {loading && <p className="text-gray-500">Loading users...</p>}
          
          {/* We use Tailwind classes for the error message styling */}
          {error && <p className="text-red-600 font-semibold">{error}</p>}
          
          {users.length > 0 && (
            <ul className="divide-y divide-gray-200">
              {users.map((user) => (
                <li key={user.id} className="py-4">
                  <strong className="text-lg text-gray-800">{user.name}</strong> -{' '}
                  <span className="text-gray-600">Role: {user.role}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}