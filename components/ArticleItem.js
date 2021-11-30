import Link from 'next/link';
import moment from 'moment';
import 'moment/locale/id';
import { slugify } from 'utils/slugify';

export default function ArticleItem({ article }) {
  const splitTags = article.tags ? article.tags.split(', ') : '';

  return (
    <>
      <article className='card rounded-xl overflow-hidden p-5 relative text-gray-300 bg-white shadow-sm'>
        <div className='article-thumbs flex justify-end p-5'>
          <div className='date-published absolute top-0 left-6 mt-11 transform rotate-90 flex items-center origin-left'>
            <span className='font-bold uppercase text-lg'>
              {moment(article.published_at).locale('id').format('ll')}
            </span>
            <span className='line'></span>
          </div>
          <div className='ml-3 rounded-tr-40px rounded-bl-25px overflow-hidden sm:h-64 relative'>
            <Link href={`/articles/${article.slug}`}>
              <a>
                <img
                  src={
                    article.image ? article.image.formats.small.url : '/images/cover_default.jpg'
                  }
                  alt={article.title}
                  className='relative w-full h-full object-cover object-center transform scale-100 hover:scale-110 transition duration-100 ease-linear bg-gray-600'
                />
              </a>
            </Link>
          </div>
        </div>
        <div className='article-details mt-auto grid w-full overflow-hidden justify-self-center'>
          <Link href={`/articles/${article.slug}`}>
            <a>
              <h2 className='uppercase font-extrabold text-secondary-200 text-xl sm:h-16 focus:text-primary-200 hover:text-primary-200'>
                {article.title}
              </h2>
            </a>
          </Link>
          <div className='text-gray-500 font-light my-4 h-14 overflow-y-auto custom-scroll'>
            {article.description}
          </div>
          {article.tags && (
            <div className='flex flex-wrap gap-2 my-2 h-12 overflow-y-auto custom-scroll'>
              {splitTags.map((tag, index) => (
                <div key={index}>
                  <Link href={`/articles/tag/${slugify(tag)}`}>
                    <a className='bg-gray-400 hover:bg-gray-500 text-white px-2 py-1 rounded-sm block text-sm capitalize'>
                      {tag}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          )}
          <Link href={`/articles/${article.slug}`}>
            <a className='btn btn-md block btn-primary text-white justify-self-end hover:bg-primary-100 transition duration-100 ease-in'>
              <button>Baca selengkapnya</button>
            </a>
          </Link>
        </div>
      </article>
    </>
  );
}
