import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { FaImage } from 'react-icons/fa';
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

export default function EditArticlePage({ article, token }) {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  if (!user) {
    return null;
  }

  const [values, setValues] = useState({
    title: article.title,
    description: article.description,
    content: article.content,
  });
  const [imagePreview, setImagePreview] = useState(
    article.image ? article.image.formats.large.url : null
  );
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    let valid = true;
    e.preventDefault();

    const hasEmptyFields = Object.values(values).some((elem) => elem === '');
    if (hasEmptyFields) {
      valid = false;
      toast.error('Mohon untuk mengisi semua form');
    }

    if (valid) {
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
        setTimeout(() => {
          router.push(`/articles/${article.slug}`);
        }, 2000);
      }
    }
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

  return (
    <>
      <Seo title="KJR Cianjur | Edit Artikel" />
      <Main cn="mt-14 md:pl-0">
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
        <h2 className="text-3xl font-bold mb-5">Edit Artikel</h2>
        {/* Image section */}
        <div className="relative">
          {imagePreview ? (
            <div className="image-placeholder w-full h-full md:h-96 bg-white relative overflow-hidden rounded">
              <img
                src={imagePreview}
                alt="Thumbnail"
                className="w-full relative top-1/2 left-1/2 transform md:-translate-y-1/2 -translate-x-1/2 object-cover object-center"
              />
            </div>
          ) : (
            <div>
              <p>Cover artikel belum diupload</p>
            </div>
          )}
          <div className="mt-3">
            <button
              onClick={() => setShowModal(true)}
              className="bg-primary-200 text-white p-2 rounded-md"
            >
              <FaImage className="inline-block" /> Update Cover
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-md bg-white mt-5 p-5">
              <div>
                <label htmlFor="title">Judul Artikel</label>
                <Gap height={5} />
                <input
                  autoFocus
                  type="text"
                  id="title"
                  name="title"
                  value={values.title}
                  onChange={handleInputChange}
                  className="focus:outline-none focus:border-primary-100 border-2 rounded-md py-1 px-2 w-full focus:placeholder-transparent"
                  placeholder="Ex: KJR Cianjur ..."
                />
              </div>
              <Gap height={10} />
              <div>
                <label htmlFor="slug">Slug URL</label>
                <Gap height={5} />
                <input
                  disabled
                  type="text"
                  id="slug"
                  name="slug"
                  value={slugify(values.title)}
                  onChange={handleInputChange}
                  className="text-gray-500 rounded-md py-1 px-2 w-full focus:placeholder-transparent"
                  placeholder="otomatis-terisi-mengikuti-judul-artikel"
                />
              </div>
              <Gap height={10} />
              <div>
                <label htmlFor="description">Deskripsi Artikel</label>
                <Gap height={5} />
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={values.description}
                  onChange={handleInputChange}
                  className="focus:outline-none focus:border-primary-100 border-2 rounded-md py-1 px-2 w-full focus:placeholder-transparent"
                  placeholder="Ex: KJR Cianjur merupakan sebuah organisasi..."
                />
              </div>
              <Gap height={10} />
              <div>
                <label htmlFor="content">Konten Artikel</label>
                <textarea
                  name="content"
                  id="content"
                  rows="5"
                  className="resize-none border rounded-md focus:border-primary-200 w-full p-2 outline-none focus:ring-1 focus:ring-primary-200"
                  placeholder="Silakan tulis disini..."
                  value={values.content}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <Gap height={10} />
              <div>
                <button
                  type="submit"
                  className="block p-2 w-full md:w-auto bg-primary-200 rounded text-white"
                >
                  Update Artikel
                </button>
              </div>
            </div>
          </div>
        </form>
      </Main>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ImageUpload
          articleId={article.id}
          imageUploaded={imageUploaded}
          token={token}
        />
      </Modal>
    </>
  );
}

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req);
  const res = await fetch(`${API_URL}/articles/${id}`);
  const article = await res.json();

  return {
    props: {
      article,
      token: token || '',
    },
  };
}
