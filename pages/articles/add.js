import { useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import Head from 'next/head';
import Script from 'next/script';
import 'react-toastify/dist/ReactToastify.css';
import { Editor } from '@tinymce/tinymce-react';

// helpers
import { parseCookies } from '@/helpers/index';

import { API_URL } from '@/config/index';
import Main from '@/components/Main';
import Seo from '@/components/Seo';
import Gap from '@/components/Gap';
import { slugify } from 'utils/slugify';
import AuthContext from '@/context/AuthContext';
import { FaImage } from 'react-icons/fa';

export default function AddArticlePage({ token, initialValue }) {
  const [value, setValue] = useState(initialValue ?? '');
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [editorContent, setEditorContent] = useState('');
  const [imagePreview, setImagePreview] = useState('/images/cover_default.jpg');
  // const [image, setImage] = useState(null);

  if (!user) {
    return null;
  }

  useEffect(() => setValue(initialValue ?? ''), [initialValue]);
  console.log(value);

  const [values, setValues] = useState({
    title: '',
    description: '',
    content: value,
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
      // const res = await fetch(`${API_URL}/articles`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Authorization: `Bearer ${token}`,
      //   },
      //   body: JSON.stringify(values),
      // });
      // if (!res.ok) {
      //   if (res.status === 403 || res.status === 401) {
      //     toast.error('Token tidak tersedia');
      //     return;
      //   }
      //   toast.error('Terjadi kesalahan');
      // } else {
      //   await res.json();
      //   toast.success('Artikel berhasil ditambahkan, mengalihkan ke halaman dashboard...');
      //   setTimeout(() => {
      //     router.push('/account/dashboard');
      //   }, 2000);
      // }
    }
  };

  // const handleImage = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('files', image);
  //   formData.append('ref', 'articles');
  //   formData.append('field', 'image');

  //   const res = await fetch(`${API_URL}/upload`, {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: formData,
  //   });

  //   console.log(res.body);
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // const handleFileChange = (e) => {
  //   setImage(e.target.files[0]);
  // };

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
          {/* <div className='mt-3'>
            <form onSubmit={handleImage}>
              <div className='bg-gray-400 border border-gray-600 p-2 rounded-md my-5'>
                <input className='cursor-pointer' type='file' onChange={handleFileChange} />
              </div>
              <input
                className='w-full p-2 bg-primary-200 text-white cursor-pointer rounded-sm'
                type='submit'
                value='Upload'
              />
            </form>
          </div> */}
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
                  name='content'
                  id='content'
                  rows='5'
                  className='resize-none border rounded-md focus:border-primary-200 w-full p-2 outline-none focus:ring-1 focus:ring-primary-200'
                  placeholder='Silakan tulis disini...'
                ></textarea>
              </div>
              {/* <div>
                <h4>Konten Artikel</h4>
                <Editor
                  id='content'
                  textareaName='content'
                  apiKey={`${process.env.NEXT_PUBLIC_TINY_API_KEY}`}
                  initialValue={initialValue}
                  value={value}
                  onEditorChange={(newValue, editor) => setValue(newValue)}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste imagetools wordcount',
                    ],
                    toolbar:
                      'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                    content_style:
                      'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                  }}
                />
              </div> */}
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
