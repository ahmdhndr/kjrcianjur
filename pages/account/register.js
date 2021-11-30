import { useState, useEffect, useContext } from 'react';
import { ScaleLoader } from 'react-spinners';
import { css } from '@emotion/react';
import { FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

// context
import AuthContext from '@/context/AuthContext';

import Main from '@/components/Main';
import Seo from '@/components/Seo';
import Gap from '@/components/Gap';
import { API_URL } from '@/config/index';

export default function LoginPage({ members, username: resUser, email: resEmail }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, error } = useContext(AuthContext);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const isUserExist = resUser.find((user) => user === username);
    const isEmailExist = resEmail.find((em) => em === email);
    const isMemberEmail = members.some((member) => member.email === email);
    const isMemberName = members.some(
      (member) => member.name.toLowerCase() === fullname.toLowerCase()
    );

    const timer = setTimeout(() => {
      if (
        username === '' ||
        email === '' ||
        fullname === '' ||
        password === '' ||
        passwordConfirm === ''
      ) {
        toast.error('Mohon untuk mengisi semua form!');
        return setLoading(false);
      }
      if (isUserExist) {
        toast.error('Username telah digunakan');
        return setLoading(false);
      }
      if (isEmailExist) {
        toast.error('Email telah digunakan');
        return setLoading(false);
      }
      if (password !== passwordConfirm) {
        toast.error('Password tidak sama!');
        return setLoading(false);
      }
      if (isMemberEmail && isMemberName) {
        register({ email, username, fullname, password });
        toast.success('Akun Anda berhasil dibuat');
        setLoading(false);
      } else {
        toast.error('Anda belum terdaftar sebagai anggota KJR Cianjur.');
        return setLoading(false);
      }
    }, 1000);
    return () => clearTimeout(timer);
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
      <Seo title='KJR Cianjur | Register User' />
      <Main cn='mt-14'>
        <div className='mx-auto max-w-xl bg-white rounded-md p-3 relative'>
          <h2 className='flex items-center font-bold mb-3'>
            <FaUser className='mr-2' /> Daftar User
          </h2>
          <ToastContainer
            position='top-center'
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover={false}
          />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='username'>Username</label>
              <Gap height={5} />
              <input
                autoFocus
                type='text'
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='focus:outline-none focus:border-primary-100 border-2 rounded-md py-1 px-2 w-full focus:placeholder-transparent'
              />
            </div>
            <Gap height={10} />
            <div>
              <label htmlFor='email'>Email</label>
              <Gap height={5} />
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='focus:outline-none focus:border-primary-100 border-2 rounded-md py-1 px-2 w-full focus:placeholder-transparent'
              />
            </div>
            <Gap height={10} />
            <div>
              <label htmlFor='fullname'>Nama Lengkap</label>
              <Gap height={5} />
              <input
                type='text'
                id='fullname'
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
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
            <div>
              <label htmlFor='passwordConfirm'>Konfirmasi Password</label>
              <Gap height={5} />
              <input
                type={showPassword ? 'text' : 'password'}
                id='passwordConfirm'
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
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
                Register
              </button>
            )}
          </form>
          <button
            className='absolute right-3 bottom-48 -mb-6 text-primary-200 p-3'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash className='text-xl' /> : <FaEye className='text-xl' />}
          </button>
          <Gap height={10} />
          <p>
            Sudah punya akun? <Link href='/account/login'>Login</Link>
          </p>
        </div>
      </Main>
    </>
  );
}

export async function getStaticProps() {
  // Check username && email exists
  const userRes = await fetch(`${API_URL}/users`);
  const users = await userRes.json();
  const username = users.map((user) => user.username);
  const email = users.map((user) => user.email);

  // Check member
  const memberRes = await fetch(`${API_URL}/members`);
  const members = await memberRes.json();

  return {
    props: { members, username, email },
    revalidate: 1,
  };
}
