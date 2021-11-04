import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '@/config/index';
// helpers
import { parseCookies } from '@/helpers/index';

import Main from '@/components/Main';
import Seo from '@/components/Seo';
import DashboardArticle from '@/components/DashboardArticle';
import AuthContext from '@/context/AuthContext';
import DashboardSkeleton from '@/components/Skeleton/DashboardSkeleton';

export default function DashboardPage({ articles, token }) {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  if (!user) {
    return null;
  }

  const deleteArticle = async (id) => {
    if (confirm('Anda yakin ingin menghapus artikel ini?')) {
      const res = await fetch(`${API_URL}/articles/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        toast.success('Artikel berhasil dihapus');
        setTimeout(() => router.reload(), 2000);
      }
    }
  };

  return (
    <>
      <Seo title="KJR Cianjur | Halaman Dashboard" />
      <Main cn="mt-14 md:pl-0">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover={false}
        />
        <div className="mb-5">
          <h2 className="font-bold text-xl mb-2">Halaman Dashboard</h2>
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-2xl text-primary-100">
              Artikel Saya
            </h3>
            <Link href="/articles/add">
              <a className="bg-primary-200 text-white px-3 py-2 rounded-md">
                Tambah Artikel
              </a>
            </Link>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles &&
            (articles.length > 0 ? (
              articles.map((article) => (
                <DashboardArticle
                  key={article.id}
                  article={article}
                  handleDelete={deleteArticle}
                />
              ))
            ) : (
              <h4>Anda belum membuat artikel</h4>
            ))}
        </div>
      </Main>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  if (token) {
    const res = await fetch(`${API_URL}/articles/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const articles = res.ok ? await res.json() : '';

    return {
      // create a copy and sort article by latest id
      props: {
        articles: articles ? articles.slice().sort((a, b) => b.id - a.id) : '',
        token: token || '',
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
