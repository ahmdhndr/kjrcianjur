import Head from 'next/head';
import Hero from '../components/Hero';
import Main from '../components/Main';
import Seo from '../components/Seo';

export default function Home() {
  return (
    <>
      <Seo title="KJR Cianjur | Home" />
      <Hero
        imgSrc="/images/bg-image.jpg"
        imgAlt="Gambar: Anggota KJR Cianjur"
        heroTitle="We Are The Future"
        heroSubTitle="Selamat datang di website KJR Cianjur"
      />
      <Main></Main>
    </>
  );
}
