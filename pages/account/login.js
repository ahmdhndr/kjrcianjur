import { useState, useEffect, useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

// context
import AuthContext from '@/context/AuthContext';

import Main from '@/components/Main';
import Seo from '@/components/Seo';
import Gap from '@/components/Gap';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login, error } = useContext(AuthContext);

  useEffect(() => error && toast.error(error));

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ identifier: email || username, password });
  };
  return (
    <>
      <Seo title="KJR Cianjur | Login User" />
      <Main cn="mt-14">
        <div className="mt-0 md:mt-8 mx-auto max-w-xl bg-white rounded-md p-3">
          <h2 className="flex items-center font-bold mb-3">
            <FaUser className="mr-2" /> Log In
          </h2>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover={false}
          />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="identifier">Username / Email</label>
              <Gap height={5} />
              <input
                autoFocus
                type="text"
                id="identifier"
                value={email || username}
                onChange={(e) =>
                  setEmail(e.target.value) || setUsername(e.target.value)
                }
                className="focus:outline-none focus:border-primary-100 border-2 rounded-md py-1 px-2 w-full focus:placeholder-transparent"
              />
            </div>
            <Gap height={10} />
            <div>
              <label htmlFor="password">Password</label>
              <Gap height={5} />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus:outline-none focus:border-primary-100 border-2 rounded-md py-1 px-2 w-full focus:placeholder-transparent"
              />
            </div>
            <Gap height={10} />
            <input
              type="submit"
              value="Login"
              className="p-2 rounded-md w-full bg-primary-200 hover:bg-primary-100 focus:bg-primary-100 text-white cursor-pointer"
            />
          </form>
          <Gap height={10} />
          <p>
            Belum punya akun? <Link href="/account/register">Daftar</Link>
          </p>
        </div>
      </Main>
    </>
  );
}
