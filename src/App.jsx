import { useState } from "react";
import Header from "./components/Header";
import BlogDetails from "./pages/BlogDetails";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter basename="/blog-app">
      <Routes>
        <Route path="/" element={<Header onSearch={setSearchTerm} />}>
          <Route index element={<Home searchTerm={searchTerm} />} />
          <Route path="details/:id" element={<BlogDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
