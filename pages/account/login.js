import { useState, useEffect, useContext, useRef } from 'react';
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

export default function LoginPage() {
  const isInitialMount = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login, error } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!username || !password) {
      toast.error('Mohon untuk mengisi semua form!');
      return setLoading(false);
    }
    login({ username, password });
    return setLoading(false);
  };

  const override = css`
    display: flex;
    align-self: center;
    justify-content: center;
  `;

  useEffect(() => {
    error && toast.error(error);
  });

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
