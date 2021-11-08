import { useRouter } from 'next/router';
import qs from 'qs';

import ArticleItem from '@/components/ArticleItem';
import Main from '@/components/Main';
import Seo from '@/components/Seo';
import Search from '@/components/Search';

// config
import { API_URL } from '@/config/index';

export default function SearchPage({ articles }) {
  const router = useRouter();
  return (
    <>
      <Seo title="KJR Cianjur | Hasil Pencarian" />
      <Main cn="mt-14">
        <section className="articles">
          <div className="mb-5 flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex-1 mb-3 md:mb-0">
              <h3 className="font-bold text-secondary-100">
                Hasil pencarian:{' '}
                <span className="capitalize">{router.query.term}</span>
              </h3>
              <div className="bg-gray-300 h-1 w-1/4"></div>
            </div>
            <Search />
          </div>
          {articles.length === 0 && (
            <h3>Artikel yang anda cari tidak ditemukan</h3>
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map((article) => (
              <ArticleItem key={article.id} article={article} />
            ))}
          </div>
        </section>
      </Main>
    </>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { title_contains: term },
        { content_contains: term },
        { description_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/articles?${query}`);
  const articles = await res.json();

  return {
    props: { articles },
  };
}
