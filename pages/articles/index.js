import { useState, useEffect } from 'react';
import ArticleItem from '@/components/ArticleItem';
import Main from '@/components/Main';
import Search from '@/components/Search';
import Seo from '@/components/Seo';

// config
import { API_URL, PER_PAGE } from '@/config/index';
import Pagination from '@/components/Pagination';
import Error from 'pages/_error';

// Skeleton
import ArticleSkeleton from '@/components/Skeleton/ArticleSkeleton';

export default function Articles({ articles, page, total, errorCode }) {
  const [loading, setLoading] = useState(false);
  const articlePage = (
    <>
      <Main cn="mt-14">
        <section className="articles">
          <div className="mb-5 flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex-1 mb-3 md:mb-0">
              <h3 className="font-bold text-secondary-100">Semua Artikel</h3>
              <div className="bg-gray-300 h-1 w-1/4"></div>
            </div>
            <Search />
          </div>
          {articles.length === 0 && (
            <h4>Tidak ada artikel untuk ditampilkan</h4>
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article) => (
              <ArticleItem key={article.id} article={article} />
            ))}
          </div>
        </section>
        <Pagination page={page} total={total} />
      </Main>
    </>
  );

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      articlePage;
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Seo title="KJR Cianjur | Semua Artikel" />
      {loading ? <ArticleSkeleton /> : articlePage}
    </>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/articles/count`);
  const total = await totalRes.json();

  // Fetch articles
  const articleRes = await fetch(
    `${API_URL}/articles?_sort=created_at:DESC&_limit=${PER_PAGE}&_start=${start}`
  );
  const errorCode = articleRes.ok ? false : articleRes.status;
  const articles = await articleRes.json();

  return {
    props: { articles, page: +page, total, errorCode },
  };
}
