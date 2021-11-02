import Main from '@/components/Main';
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function Error({ statusCode }) {
  return (
    <Main cn="flex items-center justify-center h-full">
      <div className="text-center">
        {statusCode ? (
          <>
            <h2 className="text-4xl font-bold">
              <FaExclamationTriangle className="inline-block" /> {statusCode}
            </h2>
            <p>Maaf, terjadi kesalahan</p>
            <Link href="/">
              <a className="text-primary-200">Kembali ke beranda</a>
            </Link>
          </>
        ) : (
          <>
            <h2 className="text-4xl font-bold">
              <FaExclamationTriangle className="inline-block" /> 404
            </h2>
            <p>Maaf, halaman yang anda cari tidak ditemukan</p>
            <Link href="/">
              <a className="text-primary-200">Kembali ke beranda</a>
            </Link>
          </>
        )}
      </div>
    </Main>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
