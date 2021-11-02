import marked from 'marked';
import { FaWhatsapp, FaFacebook, FaTwitter, FaTelegram } from 'react-icons/fa';

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
import Error from 'pages/_error';

export default function ArticlePage({ article, errorCode }) {
  const shareUrl = `${BASE_URL}/articles/${article.slug}`;
  const title = `${article.title}`;

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <>
      <Seo
        title={`KJR Cianjur | ${article.title}`}
        description={`${article.description}`}
      />
      <Main cn="mt-14 md:pl-0 mb-5">
        <div className="text-secondary-200">
          <div className="card rounded-sm overflow-hidden">
            <h1 className="text-4xl font-extrabold capitalize md:col-span-3">
              {article.title}
            </h1>
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
                  <p>Ditulis oleh: Admin</p>
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
  const articles = await res.json();

  return {
    props: {
      article: articles[0],
      errorCode,
    },
  };
}
