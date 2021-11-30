import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// helpers
import { parseCookies } from '@/helpers/index';

import { API_URL } from '@/config/index';
import Main from '@/components/Main';
import Seo from '@/components/Seo';
import Gap from '@/components/Gap';
import { slugify } from 'utils/slugify';
import AuthContext from '@/context/AuthContext';

export default function AddArticlePage({ token }) {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [imagePreview, setImagePreview] = useState('/images/cover_default.jpg');

  if (!user) {
    return null;
  }

  const [values, setValues] = useState({
    title: '',
    description: '',
    content: '',
    tags: '',
  });

  const handleSubmit = async (e) => {
    let valid = true;
    e.preventDefault();
    const hasEmptyFields = Object.values(values).some((elem) => elem === '');
    if (hasEmptyFields) {
      valid = false;
      toast.error('Mohon untuk mengisi semua form');
    }
    console.log(values);
    if (valid) {
      const res = await fetch(`${API_URL}/articles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        if (res.status === 403 || res.status === 401) {
          toast.error('Token tidak tersedia');
          return;
        }
        toast.error('Terjadi kesalahan');
      } else {
        await res.json();
        toast.success('Artikel berhasil ditambahkan, mengalihkan ke halaman dashboard...');
        setTimeout(() => {
          router.push('/account/dashboard');
        }, 2000);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <Seo title='KJR Cianjur | Tambah Artikel' />
      <Main cn='mt-14 md:pl-0'>
        <ToastContainer
          position='top-center'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnFocusLoss={false}
          pauseOnHover={false}
        />
        <h2 className='text-3xl font-bold mb-5'>Tambah Artikel</h2>
        <div className='relative'>
          {/* Image Upload */}
          {imagePreview && (
            <div className='image-placeholder w-full h-full md:h-96 bg-white relative overflow-hidden rounded'>
              <img
                src={imagePreview}
                alt='Thumbnail'
                className='w-full relative top-1/2 left-1/2 transform md:-translate-y-1/2 -translate-x-1/2 object-cover object-center'
              />
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className='max-w-3xl mx-auto'>
            <div className='rounded-md bg-white mt-5 p-5'>
              <div>
                <label htmlFor='title'>Judul Artikel</label>
                <Gap height={5} />
                <input
                  autoFocus
                  type='text'
                  id='title'
                  name='title'
                  value={values.title}
                  onChange={handleInputChange}
                  className='focus:outline-none focus:border-primary-100 border-2 rounded-md py-1 px-2 w-full focus:placeholder-transparent'
                  placeholder='cth: KJR Cianjur ...'
                />
              </div>
              <Gap height={10} />
              <div>
                <label htmlFor='slug'>Slug URL</label>
                <small className='text-red-500 italic block'>{'* Terisi otomatis'}</small>
                <Gap height={5} />
                <input
                  disabled
                  type='text'
                  id='slug'
                  name='slug'
                  value={slugify(values.title)}
                  onChange={handleInputChange}
                  className='border-2 rounded-md py-1 px-2 w-full focus:placeholder-transparent bg-gray-200 text-gray-400'
                  placeholder='otomatis-terisi-mengikuti-judul-artikel'
                />
              </div>
              <Gap height={10} />
              <div>
                <label htmlFor='description'>Deskripsi Artikel</label>
                <Gap height={5} />
                <input
                  type='text'
                  id='description'
                  name='description'
                  value={values.description}
                  onChange={handleInputChange}
                  className='focus:outline-none focus:border-primary-100 border-2 rounded-md py-1 px-2 w-full focus:placeholder-transparent'
                  placeholder='cth: KJR Cianjur merupakan sebuah organisasi...'
                />
              </div>
              <Gap height={10} />
              <div>
                <label htmlFor='tags'>Tag Artikel</label>
                <Gap height={5} />
                <input
                  type='text'
                  id='tags'
                  name='tags'
                  value={values.tags}
                  onChange={handleInputChange}
                  className='focus:outline-none focus:border-primary-100 border-2 rounded-md py-1 px-2 w-full focus:placeholder-transparent'
                  placeholder='cth: kjr, jantung, sehat'
                />
              </div>
              <Gap height={10} />
              <div>
                <label htmlFor='content'>Konten Artikel</label>
                <textarea
                  id='content'
                  name='content'
                  rows='5'
                  value={values.content}
                  onChange={handleInputChange}
                  className='border rounded-md focus:border-primary-200 w-full p-2 outline-none focus:ring-1 focus:ring-primary-200'
                  placeholder='Silakan tulis disini...'
                ></textarea>
              </div>
              <Gap height={10} />
              <div>
                <button
                  type='submit'
                  className='block p-2 w-full md:w-auto bg-primary-200 rounded text-white'
                >
                  Tambah Artikel
                </button>
              </div>
            </div>
          </div>
        </form>
      </Main>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  return {
    props: {
      token: token || '',
    },
  };
}
