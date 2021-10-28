import { API_URL } from '@/config/index';
// helpers
import { parseCookies } from '@/helpers/index';

import Main from '@/components/Main';
import Seo from '@/components/Seo';
import DashboardArticle from '@/components/DashboardArticle';

export default function DashboardPage({ articles }) {
  const deleteArticle = (id) => {
    console.log(id);
  };
  return (
    <>
      <Seo title="KJR Cianjur | Halaman Dashboard" />
      <Main cn="mt-14 md:pl-0">
        <div className="mb-5">
          <h2 className="font-bold mb-5">Dashboard</h2>
          <h3 className="font-bold text-primary-100">My Article</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => (
            <DashboardArticle
              key={article.id}
              article={article}
              handleDelete={deleteArticle}
            />
          ))}
        </div>
      </Main>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  const res = await fetch(`${API_URL}/articles/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(req);

  const articles = await res.json();

  return {
    props: { articles },
  };
}
