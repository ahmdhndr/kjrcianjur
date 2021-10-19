import ArticleItem from '@/components/ArticleItem';
import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Seo from '@/components/Seo';

// config
import { API_URL } from '@/config/index';

export default function Articles({ articles }) {
  return (
    <>
      <Seo title="KJR Cianjur | Semua Artikel" />
      <Main cn="mt-16">
        <section className="articles">
          <div className="mb-5">
            <h3 className="font-bold text-secondary-100">Artikel</h3>
            <div className="bg-gray-300 h-1 w-1/4"></div>
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
  const res = await fetch(`${API_URL}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
      revalidate: 1,
    },
  };
}
