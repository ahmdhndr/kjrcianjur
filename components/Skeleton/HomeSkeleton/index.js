import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function HomeSkeleton() {
  return (
    <SkeletonTheme baseColor="#9ca0a3" highlightColor="#cccccc">
      {/* Hero Skeleton */}
      <div className="max-h-hero w-full mt-12">
        <Skeleton className="h-60 md:h-hero" />
      </div>

      {/* Main Skeleton */}
      <div className="max-w-6xl mx-auto p-3">
        <div className="my-3">
          <Skeleton className="mt-2" height={25} width={250} />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
          <div className="card bg-gray-300 p-5 rounded-xl overflow-hidden relative">
            <Skeleton
              height={200}
              width={'100%'}
              style={{ borderRadius: '12px' }}
            />
            <div
              className="article-details mt-auto grid w-full overflow-hidden
          justify-self-center"
            >
              <Skeleton className="mt-5" height={40} width={250} />
              <Skeleton className="mt-2" height={25} width={'100%'} />
              <a className="block justify-self-end">
                <Skeleton className="mt-5" height={50} width={170} />
              </a>
            </div>
          </div>
          <div className="card bg-gray-300 p-5 rounded-xl overflow-hidden relative">
            <Skeleton
              height={200}
              width={'100%'}
              style={{ borderRadius: '12px' }}
            />
            <div
              className="article-details mt-auto grid w-full overflow-hidden
          justify-self-center"
            >
              <Skeleton className="mt-5" height={40} width={250} />
              <Skeleton className="mt-2" height={25} width={'100%'} />
              <a className="block justify-self-end">
                <Skeleton className="mt-5" height={50} width={170} />
              </a>
            </div>
          </div>
          <div className="card bg-gray-300 p-5 rounded-xl overflow-hidden relative">
            <Skeleton
              height={200}
              width={'100%'}
              style={{ borderRadius: '12px' }}
            />
            <div
              className="article-details mt-auto grid w-full overflow-hidden
          justify-self-center"
            >
              <Skeleton className="mt-5" height={40} width={250} />
              <Skeleton className="mt-2" height={25} width={'100%'} />
              <a className="block justify-self-end">
                <Skeleton className="mt-5" height={50} width={170} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}
