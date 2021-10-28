import Link from 'next/link';

import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Seo from '@/components/Seo';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

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
                <FaTwitter className="text-2xl" />
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
                <FaFacebook className="text-2xl" />
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
                <FaInstagram className="text-2xl" />
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
                <FaYoutube className="text-2xl" />
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
