import { Routes, Route } from "react-router-dom";
import { SearchPage } from "@/features/search/pages/SearchPage";
import { DetailPage } from "@/features/detail/pages/DetailPage";

const App = () => {
  return (
    <Routes>
      <Route path="/search" element={<SearchPage />} />
      <Route path="/article/:id" element={<DetailPage />} />
    </Routes>
  );
};

export default App;
