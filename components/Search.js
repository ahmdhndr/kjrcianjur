import { useState } from 'react';
import router, { useRouter } from 'next/router';

export default function Search() {
  const [term, setTerm] = useState('');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/articles/search?term=${term}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white rounded-md">
        <input
          type="text"
          className="p-3 rounded-md focus:ring-primary-200"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Cari Artikel"
        />
      </form>
    </div>
  );
}
