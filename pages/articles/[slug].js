import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaWhatsapp, FaFacebook, FaTwitter, FaTelegram } from 'react-icons/fa';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from 'react-share';
import marked from 'marked';
import moment from 'moment';
import 'moment/locale/id';

import Hero from '@/components/Hero';
import Main from '@/components/Main';
import Seo from '@/components/Seo';
import { API_URL, BASE_URL } from '@/config/index';
import Error from 'pages/_error';
import ArticleDetailSkeleton from '@/components/Skeleton/ArticleDetailSkeleton';
import { slugify } from 'utils/slugify';

export default function ArticlePage({ article, errorCode }) {
  const [loading, setLoading] = useState(false);
  // Share Article
  const shareUrl = `${BASE_URL}/articles/${article.slug}`;
  const title = `${article.title}`;

  const splitTags = article.tags ? article.tags.split(', ') : '';

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      articleDetailPage;
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const articleDetailPage = (
    <Main cn="mt-14 xl:pl-0 mb-5">
      <div className="text-secondary-200">
        <div className="card rounded-sm overflow-hidden">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold capitalize md:col-span-3">
              {article.title}
            </h1>
          </div>
          <div className="sm:grid md:flex justify-between text-sm text-gray-500 items-center my-2">
            <div className="flex">
              {article.user ? (
                <p>
                  <span className="capitalize font-bold">
                    {article.user.fullname}
                  </span>
                </p>
              ) : (
                <p>
                  <span className="font-bold">Admin</span>
                </p>
              )}
              <span className="mx-1">-</span>
              <p>{moment(article.published_at).locale('id').format('llll')}</p>
            </div>
          </div>
          {/* Hero Section */}
          <Hero
            imgSrc={`${
              article.image
                ? article.image.formats.large.url
                : '/images/cover_default.jpg'
            }`}
            heroTitle=""
            heroSubTitle=""
            addCn="mt-3 mb-2"
          />
          {/* Description Section */}
          <section
            className="article-content mx-auto prose"
            dangerouslySetInnerHTML={{ __html: marked(article.content) }}
          ></section>

          {/* Tag Artikel */}
          {splitTags.length > 0 && (
            <div className="my-3">
              <h4 className="mb-1">Tagar: </h4>
              <div className="flex items-center">
                {splitTags.map((tag, index) => (
                  <div key={index}>
                    <Link href={`/articles/tag/${slugify(tag)}`}>
                      <a className="bg-primary-200 hover:bg-primary-100 text-white px-2 py-1 rounded-sm inline-block mr-2 text-sm">
                        {tag}
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Share Artikel */}
          <div className="share-article mt-5">
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
  );

  return (
    <>
      <Seo
        title={`KJR Cianjur | ${article.title}`}
        description={`${article.description}`}
      />
      {loading ? <ArticleDetailSkeleton /> : articleDetailPage}
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

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/articles?slug=${slug}`);
  const errorCode = res.ok ? false : res.statusCode;
  const data = await res.json();

  return {
    props: {
      article: data[0],
      errorCode,
    },
  };
}
