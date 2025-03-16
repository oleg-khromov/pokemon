import { FC } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonFilter from "./SkeletonFilter";
import SkeletonTable from "./SkeletonTable";

const SkeletonPage: FC = () => (
  <div className="p-4">
    <SkeletonFilter />
    <SkeletonTable />
  </div>
);

export default SkeletonPage;
