import Gap from '../components/Gap';
import Main from '../components/Main';
import Seo from '../components/Seo';

export default function ContactPage() {
  return (
    <>
      <Seo title="KJR Cianjur | Kontak KJR" />
      <Main cn="mt-16">
        <div className="text-center mb-5 text-secondary-200">
          <h2 className="my-2 font-light tracking-wide">
            Kita semua tahu, tidak ada yang sempurna.
            <br />
            Jadi, jika ada pertanyaan/kritik/saran. Jangan sungkan untuk
            menghubungi kita, ya!
          </h2>
        </div>
        <div className="card bg-white p-5 overflow-hidden rounded-xl grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="card rounded-xl p-5 bg-primary-200 text-white col-span-1">
            <h2 className="font-bold text-lg tracking-wide">
              Informasi Kontak
            </h2>
            <p className="font-light tracking-wide">
              Isi formulir berikut dan kami akan membalas anda dalam 24 jam.
            </p>
            <div className="flex items-center my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <Gap width={10} />
              <p>(+62) 821-1234-1234</p>
            </div>
            <div className="flex items-center my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <Gap width={10} />
              <p>kjrcianjur@gmail.com</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <form className="grid">
              <div className="group-1 grid md:grid-cols-2 mb-2 gap-2 md:gap-5">
                <div>
                  <label htmlFor="fullName" className="font-bold">
                    Nama Lengkap
                  </label>
                  <input
                    disabled
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    className="text-sm focus:outline-none focus:border-primary-100 border-2 rounded-md py-1 px-2 w-full focus:placeholder-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-bold">
                    Alamat Email
                  </label>
                  <input
                    disabled
                    type="text"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    className="text-sm focus:outline-none focus:border-primary-100 border-2 rounded-md py-1 px-2 w-full focus:placeholder-transparent"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="font-bold text-secondary-200"
                >
                  Pesan
                </label>
                <textarea
                  disabled
                  name="message"
                  id="message"
                  rows="5"
                  className="resize-none border rounded-md border-primary-200 w-full p-2 outline-none focus:ring-1 focus:ring-primary-200"
                  placeholder="Silakan tulis disini..."
                ></textarea>
              </div>
              <div className="md:justify-self-end mt-5">
                <button
                  type="submit"
                  className="bg-primary-200 rounded text-white hover:bg-primary-100 block p-2 w-full md:w-auto"
                >
                  Kirim Pesan
                </button>
              </div>
              <p className="text-red-600 italic">
                <small>*untuk sementara form belum dapat berfungsi</small>
              </p>
            </form>
          </div>
        </div>
      </Main>
    </>
  );
}
