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
              className="ml-3"
            >
              <svg
                className="instagram instagram-hover"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UC-xuBKLdysAVqFNIGtW4xbQ"
              target="_blank"
              className="ml-3"
            >
              <svg
                className="youtube youtube-hover"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-100 px-4 py-3 text-center">
        <div>
          KJR Cianjur © 2021 created by{' '}
          <a
            className="underline"
            href="https://github.com/ahmdhndr"
            target="_blank"
          >
            ahmdhndr
          </a>
        </div>
      </div>
    </footer>
  );
}
