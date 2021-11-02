import { useState } from 'react';
import { API_URL } from '../config/index';

export default function ImageUpload({ articleId, imageUploaded, token }) {
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Upload Cover Artikel</h1>
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-400 border border-gray-600 p-2 rounded-md my-5">
          <input
            className="cursor-pointer"
            type="file"
            onChange={handleFileChange}
          />
        </div>
        <input
          className="w-full p-2 bg-primary-200 text-white cursor-pointer rounded-sm"
          type="submit"
          value="Upload"
        />
      </form>
    </div>
  );
}
