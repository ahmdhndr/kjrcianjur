import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Search() {
  const [term, setTerm] = useState('');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/articles/search?term=${term}`);
  };

  return (
    <div className="bg-white p-1 md:p-2 rounded-md">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="px-1"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Cari Artikel"
        />
      </form>
    </div>
  );
}
