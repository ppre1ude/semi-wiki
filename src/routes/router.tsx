import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/components/Layout";

import MainPage from "@/features/main/pages/MainPage";
import { DetailPage } from "@/features/detail/pages/DetailPage";
import EditPage from "@/features/edit/pages/EditPage";
import ErrorPage from "@/errors/ErrorPage";

export const ROUTE_PATH = {
  MAIN: "/",
  DETAIL: "/detail/:docId", // 문서 ID 파라미터 (프로젝트에 맞게 이름 조정 가능)
  EDIT: "/edit",
  NOT_FOUND: "*",
} as const;

const Router = createBrowserRouter([
  {
    path: ROUTE_PATH.MAIN,
    element: <AppLayout />,
    children: [
      { index: true, element: <MainPage /> }, // "/"
      { path: ROUTE_PATH.DETAIL, element: <DetailPage /> }, // "/detail/:docId"
      { path: ROUTE_PATH.EDIT, element: <EditPage /> }, // "/edit/:docId"
      { path: ROUTE_PATH.NOT_FOUND, element: <ErrorPage /> },
    ],
  },
]);

export default Router;
