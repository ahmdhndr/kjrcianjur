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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="p-2 text-sm w-full rounded-md"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Cari Artikel"
      />
    </form>
  );
}
