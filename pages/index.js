import { useState, useEffect } from 'react';
import Link from 'next/link';

import ArticleItem from '@/components/ArticleItem';
import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Seo from '@/components/Seo';

// config
import { API_URL } from '@/config/index';
import HomeSkeleton from '@/components/Skeleton/HomeSkeleton';

export default function Home({ articles }) {
  const [loading, setLoading] = useState(true);
  const homePage = (
    <>
      <Hero
        imgSrc='/images/bg_home.jpg'
        imgAlt='Gambar: Anggota KJR Cianjur'
        heroTitle='We Are The Future'
        heroSubTitle='Selamat datang di website KJR Cianjur'
      />
      <Main>
        <section className='articles'>
          <div className='my-5 flex justify-between items-center'>
            <div className='flex-1'>
              <h3 className='font-bold text-secondary-100'>Artikel Terbaru</h3>
              <div className='bg-gray-300 h-1 w-1/3'></div>
            </div>
          </div>
          {articles.length === 0 && <h4>Tidak ada artikel untuk ditampilkan</h4>}
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {articles.map((article) => (
              <ArticleItem key={article.id} article={article} />
            ))}
          </div>
        </section>
        <Link href='/articles'>
          <a className='mt-5 btn btn-md inline-block btn-primary text-white hover:bg-primary-200 transition duration-100 ease-in'>
            <button>Semua Artikel</button>
          </a>
        </Link>
      </Main>
    </>
  );

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      homePage;
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Seo title='KJR Cianjur | Beranda' />
      {loading ? <HomeSkeleton /> : homePage}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/articles?_sort=created_at:DESC&_limit=3`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
    revalidate: 1,
  };
}
