import { Routes, Route } from "react-router-dom";
import { SearchPage } from "@/features/search/pages/SearchPage";
import { DetailPage } from "@/features/detail/pages/DetailPage";
import MainPage from "@/features/main/pages/MainPage";
import EditPage from "@/features/main/pages/EditPage";

const App = () => {
  return (
    <Routes>
      <Route path="/search" element={<SearchPage />} />
      <Route path="/article/:id" element={<DetailPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/edit" element={<EditPage />} />
    </Routes>
  );
};

export default App;