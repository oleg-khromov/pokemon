import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonRow = () => (
  <tr>
    <td className="text-center">
      <Skeleton width={30} />
    </td>
    <td className="text-center">
      <Skeleton width={100} />
    </td>
    <td className="text-center">
      <Skeleton width={120} />
    </td>
    <td className="text-center">
      <Skeleton width={50} height={50} />
    </td>
  </tr>
);

export default SkeletonRow;
