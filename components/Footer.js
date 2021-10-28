import Link from 'next/link';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary-200 text-white">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 items-center py-4 px-3">
        <div className="flex items-center col-span-2 sm:justify-self-start">
          <div className="w-32">
            <img src="/images/logo-kjr-circle.png" alt="Logo KJR" />
          </div>
          <div className="ml-5">
            <h4 className="font-bold text-xl">Alamat:</h4>
            <p>Apotek Selakopi,</p>
            <p>
              Jl. Ir. H. Juanda No. 79-A, Pamoyanan. <br />
              Kec. Cianjur Kab. Cianjur, Jawa Barat, 43211.
            </p>
            <p>Telp: +62 821 1234 1234</p>
          </div>
        </div>
        <div className="col-span-2 mt-3 justify-self-center sm:col-span-1 sm:justify-self-end sm:mt-0">
          <div className="flex items-center mt-2">
            <h4>Ikuti kami di :</h4>
            <a
              href="https://www.instagram.com/kjr_cianjur/"
              target="_blank"
              className="ml-3 text-white"
            >
              <FaInstagram className="text-2xl transform hover:scale-110" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC-xuBKLdysAVqFNIGtW4xbQ"
              target="_blank"
              className="ml-3 text-white"
            >
              <FaYoutube className="text-2xl transform hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-100 px-4 py-3 text-center">
        <div>
          KJR Cianjur © 2021 created by{' '}
          <Link href="https://github.com/eruDev0">
            <a className="text-white" target="_blank">
              erudev
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
