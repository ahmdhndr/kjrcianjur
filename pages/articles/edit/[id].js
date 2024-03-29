import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaImage } from 'react-icons/fa';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from '@emotion/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// helpers
import { parseCookies } from '@/helpers/index';

import { API_URL } from '@/config/index';

import Main from '@/components/Main';
import Modal from '@/components/Modal';
import ImageUpload from '@/components/ImageUpload';
import Seo from '@/components/Seo';
import Gap from '@/components/Gap';
import { slugify } from 'utils/slugify';
import AuthContext from '@/context/AuthContext';
import Error from 'pages/_error';

export default function EditArticlePage({ article, token, errorCode }) {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  if (!user) {
    return null;
  }

  useEffect(() => {
    if (user.id !== article.user.id) {
      router.push('/');
    }
  }, [user]);

  const [values, setValues] = useState({
    title: article.title,
    description: article.description,
    content: article.content,
    tags: article.tags,
  });
  const [imagePreview, setImagePreview] = useState(
    article.image ? article.image.formats.medium.url : '/images/cover_default.jpg'
  );
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    let valid = true;
    e.preventDefault();
    setLoading(true);

    const hasEmptyFields = Object.values(values).some((elem) => elem === '');
    if (hasEmptyFields) {
      valid = false;
      toast.error('Mohon untuk mengisi semua form');
    }

    if (valid) {
      // console.log(article);
      const res = await fetch(`${API_URL}/articles/${article.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        if (res.status === 403 || res.status === 401) {
          toast.error('Unauthorized');
          return;
        }
        toast.error('Terjadi kesalahan');
      } else {
        const article = await res.json();
        toast.success('Artikel berhasil diperbarui');
        router.push(`/articles/${article.slug}`);
      }
    }
    setLoading(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const imageUploaded = async (e) => {
    const res = await fetch(`${API_URL}/articles/${article.id}`);
    const data = await res.json();
    setImagePreview(data.image.formats.large.url);
    setShowModal(false);
  };

  const override = css`
    display: flex;
    align-self: center;
    justify-content: center;
  `;

  return (
    <>
      <Seo title='KJR Cianjur | Edit Artikel' />
      <Main cn='mt-14 md:pl-0'>
        <ToastContainer
          position='top-center'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover={false}
        />
        <h2 className='text-3xl font-bold mb-5'>Edit Artikel</h2>
        {/* Image section */}
        <div className='relative'>
          {imagePreview ? (
            <div className='image-placeholder w-full h-full md:h-96 bg-white relative overflow-hidden rounded'>
              <img
                src={imagePreview}
                alt='Thumbnail'
                className='w-full relative top-1/2 left-1/2 transform md:-translate-y-1/2 -translate-x-1/2 object-cover object-center'
              />
            </div>
          ) : (
            <div>
              <p>Cover artikel belum diupload</p>
            </div>
          )}
          <div className='mt-3'>
            <button
              onClick={() => setShowModal(true)}
              className='bg-primary-200 text-white p-2 rounded-md'
            >
              <FaImage className='inline-block' /> Update Cover
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='max-w-3xl mx-auto'>
            <div className='rounded-md bg-white mt-5 p-5'>
              <div>
                <label htmlFor='title'>Judul Artikel</label>
                <Gap height={5} />
                <input
                  type='text'
                  id='title'
                  name='title'
                  value={values.title}
                  onChange={handleInputChange}
                  className='focus:outline-none focus:border-primary-100 border-2 rounded-md py-1 px-2 w-full focus:placeholder-transparent'
                  placeholder='Ex: KJR Cianjur ...'
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
                  placeholder='Ex: KJR Cianjur merupakan sebuah organisasi...'
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
                  placeholder='Ex: KJR, Jantung Sehat, remaja hebat'
                />
              </div>
              <Gap height={10} />
              <div>
                <label htmlFor='content'>Konten Artikel</label>
                <textarea
                  name='content'
                  id='content'
                  rows='5'
                  className='border rounded-md focus:border-primary-200 w-full p-2 outline-none focus:ring-1 focus:ring-primary-200'
                  placeholder='Silakan tulis disini...'
                  value={values.content}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <Gap height={10} />
              <div>
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
                    Update Artikel
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </Main>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ImageUpload articleId={article.id} imageUploaded={imageUploaded} token={token} />
      </Modal>
    </>
  );
}

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req);
  const res = await fetch(`${API_URL}/articles/${id}`);
  const errorCode = res.ok ? false : res.statusCode;
  const data = await res.json();

  return {
    props: {
      article: data,
      token: token || '',
      errorCode,
    },
  };
}
