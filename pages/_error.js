import Main from '@/components/Main';
import Seo from '@/components/Seo';
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function Error({ statusCode }) {
  return (
    <>
      <Seo title="KJR Cianjur | Halaman Error" />
      <Main cn="flex items-center justify-center h-full">
        <div className="text-center">
          {statusCode === 401 && (
            <>
              <h2 className="text-4xl font-bold">
                <FaExclamationTriangle className="inline-block" /> 401
              </h2>
              <p>Maaf, Anda harus login terlebih dahulu.</p>
              <Link href="/account/login">
                <a className="text-primary-200">Login disini</a>
              </Link>
            </>
          )}
          {statusCode === 403 && (
            <>
              <h2 className="text-4xl font-bold">
                <FaExclamationTriangle className="inline-block" /> 403
              </h2>
              <p>Maaf, Anda tidak berhak mengakses halaman ini.</p>
              <Link href="/">
                <a className="text-primary-200">Kembali ke beranda</a>
              </Link>
            </>
          )}
          {statusCode === 404 && (
            <>
              <h2 className="text-4xl font-bold">
                <FaExclamationTriangle className="inline-block" /> 404
              </h2>
              <p>Maaf, halaman yang anda cari tidak ditemukan.</p>
              <Link href="/">
                <a className="text-primary-200">Kembali ke beranda</a>
              </Link>
            </>
          )}
          {statusCode === 500 && (
            <>
              <h2 className="text-4xl font-bold">
                <FaExclamationTriangle className="inline-block" /> 500
              </h2>
              <p>Maaf, terjadi kegagalan pada server.</p>
              <Link href="/">
                <a className="text-primary-200">Kembali ke beranda</a>
              </Link>
            </>
          )}
        </div>
      </Main>
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
