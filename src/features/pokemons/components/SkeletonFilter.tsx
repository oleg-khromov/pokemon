import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonFilter: FC = () => (
  <div className="flex gap-4 mb-4">
    <div className="w-10/12">
      <Skeleton className="border p-2 rounded w-full" />
    </div>
    <div className="w-2/12">
      <Skeleton className="border p-2 rounded w-full" />
    </div>
  </div>
);

export default SkeletonFilter;
