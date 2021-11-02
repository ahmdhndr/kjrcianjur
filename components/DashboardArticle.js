import Link from 'next/link';
import moment from 'moment';
import 'moment/locale/id';
import { FaEye, FaPencilAlt, FaTrash } from 'react-icons/fa';

export default function DashboardArticle({ article, handleDelete }) {
  return (
    <>
      <article className="card rounded-xl overflow-hidden p-5 relative text-gray-300 bg-white shadow-sm">
        <div className="article-thumbs flex justify-end p-5">
          <div className="date-published absolute top-0 left-6 mt-11 transform rotate-90 flex items-center origin-left">
            <span className="font-bold uppercase text-lg">
              {moment(article.published_at).locale('id').format('ll')}
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
          <h2 className="uppercase font-extrabold text-secondary-200 text-xl sm:h-10 md:h-14">
            {article.title}
          </h2>
          <div className="text-gray-500 font-light h-16 overflow-y-auto custom-scroll">
            <p className="inline-block">Diposting:</p>{' '}
            <span className="font-bold">
              {moment(article.published_at).locale('id').format('lll')}
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-primary-200 flex items-center justify-evenly">
          <Link href={`/articles/${article.slug}`}>
            <a className="article-link flex justify-center text-white p-4 cursor-pointer hover:bg-primary-100 w-full">
              <FaEye className="text-xl" />
            </a>
          </Link>
          <Link href={`/articles/edit/${article.id}`}>
            <a className="article-edit flex justify-center text-white p-4 cursor-pointer hover:bg-primary-100 w-full">
              <FaPencilAlt className="text-xl" />
            </a>
          </Link>
          <div
            onClick={() => handleDelete(article.id)}
            className="article-delete p-4 cursor-pointer hover:bg-primary-100 w-full flex justify-center"
          >
            <button type="button" className="text-red-700">
              <FaTrash className="text-xl" />
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
