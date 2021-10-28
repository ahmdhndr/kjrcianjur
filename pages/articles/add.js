import { useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { API_URL } from '@/config/index';
import Main from '@/components/Main';
import Seo from '@/components/Seo';
import Gap from '@/components/Gap';
import { slugify } from 'utils/slugify';

export default function AddArticlePage() {
  const router = useRouter();
  const [values, setValues] = useState({
    title: '',
    description: '',
    content: '',
  });
  // const [imagePreview, setImagePreview] = useState('/images/img-default.png');
  // const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    let valid = true;
    e.preventDefault();

    const hasEmptyFields = Object.values(values).some((elem) => elem === '');
    if (hasEmptyFields) {
      valid = false;
      toast.error('Mohon untuk mengisi semua form');
    }

    if (valid) {
      const res = await fetch(`${API_URL}/articles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        toast.error('Terjadi kesalahan');
      } else {
        await res.json();
        toast.success('Artikel berhasil ditambahkan, mengalihkan...');
        setTimeout(() => {
          router.push('/articles');
        }, 2000);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // const imageUploaded = async (e) => {
  //   const res = await fetch(`${API_URL}/articles/${article.id}`);
  //   const data = await res.json();
  //   setImagePreview(data.image.formats.large.url);
  //   setShowModal(false);
  // };

  return (
    <>
      <Seo title="KJR Cianjur | Tambah Artikel" />
      <Main cn="mt-14 md:pl-0">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        />
        <h2 className="text-3xl font-bold mb-5">Tambah Artikel</h2>
        {/* Imagemage section */}
        {/* <div className="relative">
          {imagePreview && (
            <div className="image-placeholder w-full h-full md:h-96 bg-white relative overflow-hidden rounded">
              <img
                src={imagePreview}
                alt="Thumbnail"
                className="w-60 h-60 relative md:top-16 left-1/2 transform -translate-x-1/2 object-cover object-center"
              />
            </div>
          )}
          <div className="absolute bottom-2 left-2">
            <button
              onClick={() => setShowModal(true)}
              className="bg-primary-200 text-white p-2 rounded-md"
            >
              <FaImage className="inline-block" /> Update Cover
            </button>
          </div>
        </div> */}
        <form onSubmit={handleSubmit}>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-md bg-white mt-5 p-5">
              <div>
                <label htmlFor="title">Judul Artikel</label>
                <Gap height={5} />
                <input
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
                  Tambah Artikel
                </button>
              </div>
            </div>
          </div>
        </form>
      </Main>
      {/* <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ImageUpload imageUploaded={imageUploaded} />
      </Modal> */}
    </>
  );
}
