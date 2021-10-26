import Link from 'next/link';
import { PER_PAGE } from '@/config/index';

export default function Pagination({ page, total }) {
  const lastPage = Math.ceil(total / PER_PAGE);
  return (
    <div className="mt-5 flex flex-wrap items-center">
      {page > 1 && (
        <Link href={`/articles?page=${page - 1}`}>
          <a className="mr-2 px-4 py-2 rounded-md bg-primary-200 hover:bg-primary-100 text-white">
            {'<'} Prev
          </a>
        </Link>
      )}
      {page < lastPage && (
        <Link href={`/articles?page=${page + 1}`}>
          <a className="px-4 py-2 rounded-md bg-primary-200 hover:bg-primary-100 text-white">
            Next {'>'}
          </a>
        </Link>
      )}
    </div>
  );
}
