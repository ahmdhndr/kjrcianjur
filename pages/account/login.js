import { useState, useEffect, useContext } from 'react';
import { FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from '@emotion/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

// context
import AuthContext from '@/context/AuthContext';

import Main from '@/components/Main';
import Seo from '@/components/Seo';
import Gap from '@/components/Gap';
import { API_URL } from '@/config/index';

export default function LoginPage({ users }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login, error } = useContext(AuthContext);

  useEffect(() => error && toast.error(error));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const userRes = users.map((user) => user.username);
    const isValidUser = userRes.some((userInput) => userInput === username);

    const timer = setTimeout(() => {
      setLoading(false);
      if (!username || !password) {
        toast.error('Mohon untuk mengisi semua form!');
        return setLoading(false);
      }

      if (!isValidUser) {
        toast.error('Kredensial yang Anda masukkan salah');
        return setLoading(false);
      } else if (isValidUser) {
        login({ username, password });
        setLoading(false);
      }
    }, 1000);
    return () => clearTimeout(timer);
  };

  const override = css`
    display: flex;
    align-self: center;
    justify-content: center;
  `;

  return (
    <>
      <Seo title='KJR Cianjur | Login User' />
      <Main cn='mt-14'>
        <div className='mt-0 md:mt-8 mx-auto max-w-xl bg-white rounded-md p-3 relative'>
          <h2 className='flex items-center font-bold mb-3'>
            <FaUser className='mr-2' /> Log In
          </h2>
          <ToastContainer
            position='top-center'
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            pauseOnFocusLoss={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover={false}
          />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='identifier'>Username</label>
              <Gap height={5} />
              <input
                autoFocus
                type='text'
                id='identifier'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='focus:outline-none focus:border-primary-100 border-2 rounded-md py-1 px-2 w-full focus:placeholder-transparent'
              />
            </div>
            <Gap height={10} />
            <div>
              <label htmlFor='password'>Password</label>
              <Gap height={5} />
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='focus:outline-none focus:border-primary-100 border-2 rounded-md py-1 px-2 w-full focus:placeholder-transparent'
              />
            </div>
            <Gap height={10} />
            {loading ? (
              <div className='p-2 rounded-md w-full bg-gray-400 text-white cursor-not-allowed'>
                <ScaleLoader
                  height={20}
                  width={4}
                  radius={2}
                  margin={2}
                  color={'#e5e7eb'}
                  css={override}
                  loading={loading}
                  speedMultiplier={1.1}
                />
              </div>
            ) : (
              <button
                type='submit'
                className='p-2 rounded-md w-full bg-primary-200 hover:bg-primary-100 text-white cursor-pointer'
              >
                Login
              </button>
            )}
          </form>
          <button
            className='absolute right-3 top-44 -mt-7 text-primary-200 p-3'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash className='text-xl' /> : <FaEye className='text-xl' />}
          </button>
          <Gap height={10} />
          <p>
            Belum punya akun? <Link href='/account/register'>Daftar</Link>
          </p>
        </div>
      </Main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/users`);
  const users = await res.json();
  return {
    props: { users },
    revalidate: 1,
  };
}
