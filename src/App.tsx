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
