import Link from 'next/link';
import marked from 'marked';
import {
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaTelegram,
  FaPencilAlt,
  FaTimes,
} from 'react-icons/fa';

import moment from 'moment';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from 'react-share';

import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Seo from '@/components/Seo';
import { API_URL } from '@/config/index';

export default function ArticlePage({ article }) {
  const deleteArticle = (e) => {
    console.log('delete');
  };

  const shareUrl = `${API_URL}/articles/${article.slug}`;
  const title = `${article.title}`;
  return (
    <>
      <Seo
        title={`KJR Cianjur | ${article.title}`}
        description={`${article.description}`}
      />
      <Main cn="mt-14 md:pl-0 mb-5">
        <div className="text-secondary-200">
          <div className="card rounded-sm overflow-hidden">
            {/* <Link href="/">
              <a className="block mb-5">{'<'} Kembali</a>
            </Link> */}
            <div className="sm:block md:grid md:grid-cols-4 md:items-center md:justify-between">
              <h1 className="text-4xl font-extrabold capitalize md:col-span-3">
                {article.title}
              </h1>
              <div className="md:justify-self-end flex items-center md:col-span-1">
                <Link href={`/articles/edit/${article.id}`}>
                  <a className="block text-primary-200 rounded-md items-end">
                    <FaPencilAlt className="inline-block" /> Edit Artikel
                  </a>
                </Link>
                <button
                  type="button"
                  className="block text-red-700 rounded-md ml-3 w-auto items-end"
                  onClick={deleteArticle}
                >
                  <FaTimes className="inline-block" /> Hapus
                </button>
              </div>
            </div>
            <div className="sm:grid md:flex justify-between text-sm text-gray-500 items-center my-2">
              <div>
                {article.user ? (
                  <p>Ditulis oleh: {article.user.username}</p>
                ) : (
                  <p>Ditulis oleh: Admin</p>
                )}
                <p>{`Terakhir diperbarui: ${moment(article.updated_at)
                  .locale('id')
                  .format('MMMM Do YYYY, HH:MM')}`}</p>
              </div>
            </div>
            {/* Hero Section */}
            <Hero
              imgSrc={`${
                article.image ? article.image.url : '/images/default.jpg'
              }`}
              heroTitle=""
              heroSubTitle=""
              addCn="mt-0 mb-2"
            />
            {/* Description Section */}
            <section
              className="article-content"
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

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/articles`);
  const articles = await res.json();

  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/articles?slug=${slug}`);
  const articles = await res.json();

  return {
    props: {
      article: articles[0],
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/articles/${slug}`);
//   const articles = await res.json();

//   return {
//     props: {
//       article: articles[0],
//     },
//   };
// }
