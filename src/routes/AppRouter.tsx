import { FC, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "components";

const Home = lazy(() => import("pages/Home"));
const Detail = lazy(() => import("pages/Detail"));
const NotFound = lazy(() => import("pages/NotFound"));

const AppRouter: FC = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:id" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRouter;
