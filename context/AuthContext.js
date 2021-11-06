/**
 * Using Context API to store authentication method, user
 * and error that come from authentication
 */

import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { BASE_URL, PROTECTED_ROUTES } from '@/config/index';

// Create Context
const AuthContext = createContext();

/**
 * Create Provider that basically wraps around the rest of entire application
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  useEffect(() => isLoggedIn(), []);

  // Register user
  const register = async (user) => {
    const res = await fetch(`${BASE_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      setTimeout(() => router.push('/account/dashboard'), 3000);
    } else {
      setError(data.message);
      setError('');
    }
  };

  // Login user
  const login = async ({ identifier, password }) => {
    const res = await fetch(`${BASE_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      router.push('/account/dashboard');
    } else {
      setError(data.message);
      setError('');
    }
  };

  // Logout user
  const logout = async () => {
    const res = await fetch(`${BASE_URL}/api/logout`, {
      method: 'POST',
    });
    if (res.ok) {
      setUser(null);
      router.push('/account/login');
    }
  };

  // Check if user is logged in
  const isLoggedIn = async () => {
    const res = await fetch(`${BASE_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser('');
      if (PROTECTED_ROUTES.includes(router.pathname)) {
        router.push('/account/login');
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, error, register, login, logout, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
