import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/components/Layout";

import MainPage from "@/features/main/pages/MainPage";
import { DetailPage } from "@/features/detail/pages/DetailPage";
import EditPage from "@/features/edit/pages/EditPage";
import { SearchPage } from "@/features/search/pages/SearchPage";

const NotFoundFallback = () => (
  <div style={{ padding: 24 }}>
    <h1>404</h1>
    <p>페이지를 찾을 수 없어요.</p>
  </div>
);

export const ROUTE_PATH = {
  MAIN: "/",
  DETAIL: "/detail/:docId", // 문서 ID 파라미터 (프로젝트에 맞게 이름 조정 가능)
  EDIT: "/edit/:docId",
  SEARCH: "/search",
  NOT_FOUND: "*",
} as const;

const Router = createBrowserRouter([
  {
    path: ROUTE_PATH.MAIN,
    element: <AppLayout />,
    errorElement: <NotFoundFallback />,
    children: [
      { index: true, element: <MainPage /> }, // "/"
      { path: ROUTE_PATH.DETAIL, element: <DetailPage /> }, // "/detail/:docId"
      { path: ROUTE_PATH.EDIT, element: <EditPage /> }, // "/edit/:docId"
      { path: ROUTE_PATH.SEARCH, element: <SearchPage /> }, // "/search
      { path: ROUTE_PATH.NOT_FOUND, element: <NotFoundFallback /> },
    ],
  },
]);

export default Router;
