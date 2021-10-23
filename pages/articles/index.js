import ArticleItem from '@/components/ArticleItem';
import Main from '@/components/Main';
import Search from '@/components/Search';
import Seo from '@/components/Seo';

// config
import { API_URL } from '@/config/index';

export default function Articles({ articles }) {
  return (
    <>
      <Seo title="KJR Cianjur | Semua Artikel" />
      <Main cn="mt-14">
        <section className="articles">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-bold text-secondary-100">Artikel</h3>
              <div className="bg-gray-300 h-1 w-1/4"></div>
            </div>
            <Search />
          </div>
          {articles.length === 0 && <h3>Belum ada artikel</h3>}
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

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/articles?_sort=created_at:DESC`);
  const articles = await res.json();

  return {
    props: { articles },
    revalidate: 1,
  };
}
