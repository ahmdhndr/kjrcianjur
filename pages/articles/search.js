import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import qs from 'qs';

import ArticleItem from '@/components/ArticleItem';
import Main from '@/components/Main';
import Seo from '@/components/Seo';
import Search from '@/components/Search';

// config
import { API_URL } from '@/config/index';
import ArticleSkeleton from '@/components/Skeleton/ArticleSkeleton';
import Error from 'pages/_error';

export default function SearchPage({ articles, errorCode }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  const searchPage = (
    <>
      <Main cn='mt-14'>
        <section className='articles'>
          <div className='mb-5 flex flex-col md:flex-row md:items-center justify-between'>
            <div className='flex-1 mb-3 md:mb-0'>
              <h3 className='text-secondary-100'>
                Artikel berdasarkan pencarian:{' '}
                <span className='uppercase font-bold'>{router.query.term}</span>
              </h3>
              <div className='bg-gray-300 h-1 w-1/4'></div>
            </div>
            <Search />
          </div>
          {articles.length === 0 && <h3>Artikel yang anda cari tidak ditemukan</h3>}
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {articles.map((article) => (
              <ArticleItem key={article.id} article={article} />
            ))}
          </div>
        </section>
      </Main>
    </>
  );

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      searchPage;
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Seo title='KJR Cianjur | Hasil Pencarian ' keyword={`${router.query.term}`} />
      {loading ? <ArticleSkeleton /> : searchPage}
    </>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [{ title_contains: term }, { content_contains: term }, { description_contains: term }],
    },
  });
  const res = await fetch(`${API_URL}/articles?${query}`);
  const errorCode = res.ok ? false : res.statusCode;
  const articles = await res.json();

  return {
    props: {
      articles: articles.sort((a, b) => b.id - a.id),
      errorCode,
    },
  };
}
