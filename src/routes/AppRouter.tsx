import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));
const Detail = lazy(() => import("pages/Detail"));
const NotFound = lazy(() => import("pages/NotFound"));

const AppRouter: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:id" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRouter;
