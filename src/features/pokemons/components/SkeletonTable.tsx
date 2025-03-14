import "react-loading-skeleton/dist/skeleton.css";
import SkeletonRow from "./SkeletonRow";

const SkeletonTable = () => (
  <table className="min-w-full border-collapse border">
    <thead>
      <tr className="border">
        <th className="border p-2">ID</th>
        <th className="border p-2">Name</th>
        <th className="border p-2">Type(s)</th>
        <th className="border p-2">Image</th>
      </tr>
    </thead>
    <tbody>
      {Array.from({ length: 10 }).map((_, i) => (
        <SkeletonRow key={i} />
      ))}
    </tbody>
  </table>
);

export default SkeletonTable;
