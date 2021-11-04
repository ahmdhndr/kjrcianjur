import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function AboutSkeleton() {
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
          <Skeleton count={10} className="mt-2" height={25} width={'100%'} />
        </div>
      </div>
    </SkeletonTheme>
  );
}
