import moment from 'moment';
import Link from 'next/link';
// import Image from 'next/image';

export default function ArticleItem({ article }) {
  return (
    <article className="card rounded-xl overflow-hidden p-5 relative text-gray-300 bg-white shadow-sm">
      <div className="article-thumbs flex justify-end p-5">
        <div className="date-published absolute top-0 left-6 mt-11 transform rotate-90 flex items-center origin-left">
          <span className="font-bold uppercase text-lg">
            {moment(article.published_at).format('ll')}
          </span>
          <span className="line"></span>
        </div>
        <div className="ml-3 rounded-tr-40px rounded-bl-25px overflow-hidden sm:h-64 relative">
          <Link href={`/articles/${article.slug}`}>
            <a>
              <img
                src={
                  article.image
                    ? article.image.formats.small.url
                    : '/images/default.jpg'
                }
                alt={article.title}
                className="relative w-full h-full object-cover object-center transform scale-100 hover:scale-110 transition duration-100 ease-linear bg-gray-600"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="article-details mt-auto grid w-full overflow-hidden justify-self-center">
        <h2 className="uppercase font-extrabold text-secondary-200 text-xl sm:h-16">
          {article.title}
        </h2>
        <div className="text-gray-500 font-light my-4 h-14 overflow-y-auto custom-scroll">
          {article.description}
        </div>
        <Link href={`/articles/${article.slug}`}>
          <a className="btn btn-md block btn-primary text-white justify-self-end hover:bg-primary-200 transition duration-100 ease-in">
            <button>Baca selengkapnya</button>
          </a>
        </Link>
      </div>
    </article>
  );
}
