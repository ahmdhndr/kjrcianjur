import Link from 'next/link';
import Main from '@/components/Main';
import Seo from '@/components/Seo';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function NotFoundPage() {
  return (
    <>
      <Seo title="KJR Cianjur | Halaman Error" />
      <Main cn="flex items-center justify-center h-full">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            <FaExclamationTriangle className="inline-block" /> 404
          </h2>
          <p>Maaf, halaman yang anda cari tidak ditemukan.</p>
          <Link href="/">
            <a className="text-primary-200">Kembali ke beranda</a>
          </Link>
        </div>
      </Main>
    </>
  );
}
