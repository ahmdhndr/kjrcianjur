import marked from 'marked';
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaTelegram,
  FaPencilAlt,
  FaTrash,
} from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

import moment from 'moment';
import 'moment/locale/id';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from 'react-share';

import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Seo from '@/components/Seo';
import { API_URL, BASE_URL } from '@/config/index';
import AuthContext from '@/context/AuthContext';
import Error from 'pages/_error';
import { useContext } from 'react';
import { parseCookies } from '@/helpers/index';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ArticlePage({ article, errorCode, token }) {
  const { user } = useContext(AuthContext);
  const isOwner = user.id === article.user.id;
  const router = useRouter();

  // Share Article
  const shareUrl = `${BASE_URL}/articles/${article.slug}`;
  const title = `${article.title}`;

  if (errorCode) {
    return <Error statusCode={errorCode} />;
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
        router.push('/account/dashboard');
      }
    }
  };

  return (
    <>
      <Seo
        title={`KJR Cianjur | ${article.title}`}
        description={`${article.description}`}
      />
      <Main cn="mt-14 xl:pl-0 mb-5">
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
        <div className="text-secondary-200">
          <div className="card rounded-sm overflow-hidden">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-extrabold capitalize md:col-span-3">
                {article.title}
              </h1>
              {isOwner && (
                <div className="flex">
                  <Link href={`/articles/edit/${article.id}`}>
                    <a className="bg-primary-200 rounded-md article-edit flex justify-center text-white p-2 cursor-pointer hover:bg-primary-100 w-full mr-1">
                      <FaPencilAlt />
                    </a>
                  </Link>
                  <div onClick={() => deleteArticle(article.id)}>
                    <a className="bg-red-700 rounded-md article-edit flex justify-center text-white p-2 cursor-pointer hover:bg-red-800 w-full">
                      <FaTrash />
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="sm:grid md:flex justify-between text-sm text-gray-500 items-center my-2">
              <div>
                {article.user ? (
                  <p>
                    Ditulis oleh:{' '}
                    <span className="capitalize font-bold">
                      {article.user.fullname}
                    </span>
                  </p>
                ) : (
                  <p>
                    Ditulis oleh: <span className="font-bold">Admin</span>
                  </p>
                )}
                <p>{`Terakhir diperbarui: ${moment(article.updated_at)
                  .locale('id')
                  .format('llll')}`}</p>
              </div>
            </div>
            {/* Hero Section */}
            <Hero
              imgSrc={`${
                article.image ? article.image.url : '/images/default.jpg'
              }`}
              heroTitle=""
              heroSubTitle=""
              addCn="mt-3 mb-2"
            />
            {/* Description Section */}
            <section
              className="article-content prose"
              dangerouslySetInnerHTML={{ __html: marked(article.content) }}
            ></section>

            {/* Share Artikel */}
            <div className="share-article mt-10">
              <h4>Bagikan artikel ini</h4>
              <div className="flex items-center">
                <div className="cursor-pointer hover:bg-primary-200 duration-300 share-icon bg-primary-100 flex items-center p-2 border">
                  <WhatsappShareButton url={shareUrl} quote={title}>
                    <FaWhatsapp className="text-white text-2xl" />
                  </WhatsappShareButton>
                </div>
                <div className="cursor-pointer hover:bg-primary-200 duration-300 share-icon bg-primary-100 flex items-center p-2 border">
                  <FacebookShareButton url={shareUrl} quote={title}>
                    <FaFacebook className="text-white text-2xl" />
                  </FacebookShareButton>
                </div>
                <div className="cursor-pointer hover:bg-primary-200 duration-300 share-icon bg-primary-100 flex items-center p-2 border">
                  <TwitterShareButton url={shareUrl} quote={title}>
                    <FaTwitter className="text-white text-2xl" />
                  </TwitterShareButton>
                </div>
                <div className="cursor-pointer hover:bg-primary-200 duration-300 share-icon bg-primary-100 flex items-center p-2 border">
                  <TelegramShareButton url={shareUrl} quote={title}>
                    <FaTelegram className="text-white text-2xl" />
                  </TelegramShareButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/articles`);
//   const articles = await res.json();

//   const paths = articles.map((article) => ({
//     params: { slug: article.slug },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params: { slug } }) {
//   const res = await fetch(`${API_URL}/articles?slug=${slug}`);
//   const articles = await res.json();

//   return {
//     props: {
//       article: articles[0],
//     },
//     revalidate: 1,
//   };
// }

export async function getServerSideProps({ query: { slug }, req }) {
  const { token } = parseCookies(req);
  const res = await fetch(`${API_URL}/articles?slug=${slug}`);
  const errorCode = res.ok ? false : res.statusCode;
  const articles = await res.json();

  return {
    props: {
      article: articles[0],
      errorCode,
      token: token || '',
    },
  };
}
