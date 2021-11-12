import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import qs from 'qs';

import { API_URL } from '@/config/index';
import ArticleItem from '@/components/ArticleItem';
import Main from '@/components/Main';
import Seo from '@/components/Seo';
import Search from '@/components/Search';
import ArticleSkeleton from '@/components/Skeleton/ArticleSkeleton';
import Error from 'pages/_error';

export default function TagPage({ articles, errorCode }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const resultArticle = router.query.tag.split('-').join(' ');
  const capitalizeArticle = resultArticle.replace(/\w\S*/g, (w) =>
    w.replace(/^\w/, (c) => c.toUpperCase())
  );

  const articleListPage = (
    <>
      <Main cn='mt-14'>
        <section className='articles'>
          <div className='mb-5 flex flex-col md:flex-row md:items-center justify-between'>
            <div className='flex-1 mb-3 md:mb-0'>
              <h3 className='text-secondary-100'>
                Artikel berdasarkan tagar:{' '}
                <span className='uppercase font-bold'>{resultArticle}</span>
              </h3>
              <div className='bg-gray-300 h-1 w-1/4'></div>
            </div>
            <Search />
          </div>
          {articles.length === 0 && <h4>Tidak ada artikel untuk ditampilkan</h4>}
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {articles.map((article) => (
              <ArticleItem key={article.id} article={article} />
            ))}
          </div>
        </section>
      </Main>
    </>
  );

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      articleListPage;
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Seo title={`KJR Cianjur | Tagar ${capitalizeArticle}`} keyword={`${resultArticle}`} />
      {loading ? <ArticleSkeleton /> : articleListPage}
    </>
  );
}

export async function getServerSideProps({ query: { tag } }) {
  const term = tag.split('-').join(' ');
  const query = qs.stringify({
    _where: {
      _or: [{ tags_contains: term }],
    },
  });
  const res = await fetch(`${API_URL}/articles?${query}`);
  const errorCode = res.ok ? false : res.statusCode;
  const data = await res.json();

  return {
    props: {
      articles: data.sort((a, b) => b.id - a.id),
      errorCode,
    },
  };
}
