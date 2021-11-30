import { FaPhone, FaEnvelope } from 'react-icons/fa';

import Gap from '@/components/Gap';
import Main from '@/components/Main';
import Seo from '@/components/Seo';

export default function ContactPage() {
  return (
    <>
      <Seo title='KJR Cianjur | Kontak KJR' />
      <Main cn='mt-12'>
        <div className='text-center mb-5 text-secondary-200'>
          <h2 className='text-base my-2 font-light tracking-wide'>
            Kita semua tahu, tidak ada yang sempurna.
            <br />
            Jadi, jika ada pertanyaan/kritik/saran. Jangan sungkan untuk menghubungi kita, ya!
          </h2>
        </div>
        <div className='card bg-white p-5 overflow-hidden rounded-md grid grid-cols-1 md:grid-cols-3 gap-5'>
          <div className='card rounded-xl p-5 bg-primary-200 text-white col-span-1'>
            <h2 className='font-bold text-lg tracking-wide'>Informasi Kontak</h2>
            <p className='font-light tracking-wide'>
              Isi formulir berikut dan kami akan membalas anda dalam 24 jam.
            </p>
            <div className='flex items-center my-2'>
              <FaPhone />
              <Gap width={10} />
              <p>(+62) 821-1234-1234</p>
            </div>
            <div className='flex items-center my-2'>
              <FaEnvelope />
              <Gap width={10} />
              <p>kjrcianjur@gmail.com</p>
            </div>
          </div>
          <div className='col-span-1 md:col-span-2'>
            <form className='grid'>
              <div className='group-1 grid md:grid-cols-2 mb-2 gap-2 md:gap-5'>
                <div>
                  <label htmlFor='fullName' className='font-bold'>
                    Nama Lengkap
                  </label>
                  <input
                    disabled
                    type='text'
                    id='fullName'
                    name='fullName'
                    placeholder='John Doe'
                    className='text-sm focus:outline-none focus:border-primary-100 border-2 rounded-md py-1 px-2 w-full focus:placeholder-transparent'
                  />
                </div>
                <div>
                  <label htmlFor='email' className='font-bold'>
                    Alamat Email
                  </label>
                  <input
                    disabled
                    type='text'
                    id='email'
                    name='email'
                    placeholder='email@example.com'
                    className='text-sm focus:outline-none focus:border-primary-100 border-2 rounded-md py-1 px-2 w-full focus:placeholder-transparent'
                  />
                </div>
              </div>
              <div>
                <label htmlFor='message' className='font-bold text-secondary-200'>
                  Pesan
                </label>
                <textarea
                  disabled
                  name='message'
                  id='message'
                  rows='5'
                  className='resize-none border rounded-md border-primary-200 w-full p-2 outline-none focus:ring-1 focus:ring-primary-200'
                  placeholder='Silakan tulis disini...'
                ></textarea>
              </div>
              <div className='md:justify-self-end mt-5'>
                <button
                  type='submit'
                  className='bg-primary-200 rounded text-white hover:bg-primary-100 block p-2 w-full md:w-auto'
                >
                  Kirim Pesan
                </button>
              </div>
              <p className='text-red-600 italic'>
                <small>*form masih dalam tahap perkembangan</small>
              </p>
            </form>
          </div>
        </div>
      </Main>
    </>
  );
}
