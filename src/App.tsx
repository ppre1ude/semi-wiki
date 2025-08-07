import { Routes, Route } from "react-router-dom";
import { SearchPage } from "@/features/search/pages/SearchPage";
import { DetailPage } from "@/features/detail/pages/DetailPage";
import Mainpage from "@/features/mainpage/pages/Mainpage";

const App = () => {
  return (
    <Routes>
      <Route path="/search" element={<SearchPage />} />
      <Route path="/article/:id" element={<DetailPage />} />
      <Route path="/" element={<Mainpage />} />
    </Routes>
  );
};

export default App;
