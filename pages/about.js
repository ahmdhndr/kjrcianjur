import Link from 'next/link';

import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Seo from '@/components/Seo';

export default function AboutPage() {
  return (
    <>
      <Seo title="KJR Cianjur | Tentang KJR" />
      <Hero
        imgSrc="/images/foto-8.jpg"
        imgAlt="Gambar: Gabungan Anggota KJR"
        heroTitle="Tentang Kami"
        heroSubTitle=""
        objPos="object-bottom"
      />
      <Main cn="mb-5">
        <div className="card overflow-hidden">
          <p className="text-sm mb-2">
            Sumber:{' '}
            <span>
              <Link href="https://inaheart.or.id/klub-jantung-remaja">
                <a target="_blank" className="text-primary-200">
                  Situs Yayasan Jantung Indonesia
                </a>
              </Link>
            </span>
          </p>
          <div>
            <p className="text-lg mb-3">
              Klub Jantung Remaja (KJR) adalah suatu metode yang ditempuh untuk
              mempermudah koordinasi dalam pelaksanaan Gerakan Jantung Sehat
              Remaja (GJSR) Yayasan Jantung Indonesia dengan para remaja melalui
              sistem organisasi yang terpadu.
            </p>
            <p className="text-lg mb-3">
              Tujuan Umum KJR adalah terciptanya remaja kader bangsa yang sehat
              dan produktif.
            </p>
            <h4 className="text-xl font-bold text-secondary-200">
              Sport (Keolahragaan)
            </h4>
            <ol className="my-3 ml-5">
              <li>1. Senam HipHeart</li>
              <li>2. Lompat Tali (LTJS)</li>
              <li>3. Olahraga yang digemari remaja</li>
            </ol>
            <h4 className="text-xl font-bold text-secondary-200">
              Soft Skill (Keterampilan)
            </h4>
            <ol className="my-3 ml-5">
              <li>1. Pelatihan Kepemimpinan</li>
              <li>
                2. Pengembangan Intelektual, Spiritual, Emosional, &amp; Fisikal
              </li>
              <li>3. Pelatihan Manajemen Organisasi</li>
              <li>4. Pelatihan Mahir Berbicara dimuka Umum</li>
              <li>5. Pelatihan Bantuan Hidup Dasar</li>
              <li>6. Pelatihan Kesehatan Jantung</li>
            </ol>
            <h4 className="text-xl font-bold text-secondary-200">
              Pancang Niat Gerakan Jantung Sehat Remaja
            </h4>
            <ol className="panca-niat my-3 ml-5">
              <li>
                1. <span>Menghargai</span> Karunia Tuhan dengan menjalankan Pola
                Hidup Sehat.
              </li>
              <li>
                2. <span>Bertanggung jawab</span> dalam pelaksanaan Gerakan
                Jantung Sehat Remaja Indonesia.
              </li>
              <li>
                3. <span>Bekerjasama</span> memasyarakatkan Panca Usaha Jantung
                Sehat dikalangan remaja dan masyarakat Indonesia.
              </li>
              <li>
                4. <span>Toleran</span> terhadap kebutuhan jiwa dan raga dengan
                makanan bergizi yang seimbang.
              </li>
              <li>
                5. <span>Bersatu</span> padu memerangi bahaya merokok dikalangan
                remaja dan masyarakat Indonesia.
              </li>
              <li>
                6. <span>Jujur</span> dalam fikir, sikap dan tindak untuk
                mencapai ketenangan jiwa.
              </li>
              <li>
                7. <span>Mengendalikan rasa</span>, karsa dan cipta untuk{' '}
                <span>kebahagiaan</span> yang hakiki.
              </li>
              <li>
                8. <span>Sayangi</span> diri, keluarga dan Bangsa dengan
                membangun budaya berolahraga.
              </li>
            </ol>
            <h4 className="text-xl font-bold text-secondary-200 mt-14">
              Follow sosial media kita, yuk! :
            </h4>
            <div>
              <div className="flex items-center">
                <div>
                  <svg
                    className="twitter fill-blue"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </div>
                <div className="grid ml-3">
                  <Link href="https://twitter.com/KJRIndonesia/">
                    <a className="my-1" target="_blank">
                      @KJRIndonesia
                    </a>
                  </Link>
                  <Link href="https://twitter.com/KerenTanpaRokok/">
                    <a className="my-1" target="_blank">
                      @KerenTanpaRokok
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <div className="facebook-icon">
                  <svg
                    className="facebook fill-blue"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </div>
                <div className="grid ml-3">
                  <Link href="https://web.facebook.com/KlubJantungRemajaIndonesia/">
                    <a className="my-1" target="_blank">
                      Klub Jantung Remaja Indonesia
                    </a>
                  </Link>
                  <Link href="https://web.facebook.com/komunitaskerenTanpaRokok/">
                    <a className="my-1" target="_blank">
                      Komunitas Keren Tanpa Rokok
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <div className="instagram-icon">
                  <svg
                    className="instagram fill-blue"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div className="grid ml-3">
                  <Link href="https://www.instagram.com/kjrindonesia/">
                    <a className="my-1" target="_blank">
                      @kjrindonesia
                    </a>
                  </Link>
                  <Link href="https://www.instagram.com/kerentanparokok/">
                    <a className="my-1" target="_blank">
                      @kerentanparokok
                    </a>
                  </Link>
                  <Link href="https://www.instagram.com/kjr_cianjur/">
                    <a className="my-1" target="_blank">
                      @kjr_cianjur
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <div className="youtube-icon">
                  <svg
                    className="youtube fill-blue"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </div>
                <div className="grid ml-3">
                  <Link href="https://www.youtube.com/channel/UC-xuBKLdysAVqFNIGtW4xbQ">
                    <a target="_blank">Youtube KJR Cianjur</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
