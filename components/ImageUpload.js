import { useState } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from '@emotion/react';
import { API_URL } from '../config/index';

export default function ImageUpload({ articleId, imageUploaded, token }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('files', image);
    formData.append('ref', 'articles');
    formData.append('refId', articleId);
    formData.append('field', 'image');

    const res = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (res.ok) {
      imageUploaded();
    }
    setLoading(false);
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const override = css`
    display: flex;
    align-self: center;
    justify-content: center;
  `;

  return (
    <div>
      <h1 className='text-2xl font-bold'>Upload Cover Artikel</h1>
      <form onSubmit={handleSubmit}>
        <div className='bg-gray-400 border border-gray-600 p-2 rounded-md my-5'>
          <input className='cursor-pointer' type='file' onChange={handleFileChange} />
        </div>
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
            Upload
          </button>
        )}
        <small className='text-red-500'>* Ukuran gambar min. 1920x1080 atau rasio 16:9</small>
      </form>
    </div>
  );
}
