import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ArticleDetailSkeleton() {
  return (
    <SkeletonTheme baseColor="#9ca0a3" highlightColor="#cccccc">
      {/* Main Skeleton */}
      <div className="max-w-6xl mx-auto p-3">
        <div className="mt-12">
          <Skeleton height={45} width={300} />
          <Skeleton className="mt-2" height={15} width={200} />
          <Skeleton height={15} width={200} />
        </div>

        {/* Hero Skeleton */}
        <div className="max-h-hero w-full">
          <Skeleton className="h-60 md:h-hero" />
        </div>

        {/* Article Detail Skeleton */}
        <div className="my-3">
          <Skeleton className="mt-2" height={25} width={250} />
          <Skeleton count={10} className="mt-2" height={25} width={'100%'} />
        </div>
      </div>
    </SkeletonTheme>
  );
}
