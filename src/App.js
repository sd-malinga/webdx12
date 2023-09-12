import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Blog1 from "./pages/Blogs/Blog1";
import Blog2 from "./pages/Blogs/Blog2";
import Blog3 from "./pages/Blogs/Blog3";
import Blog4 from "./pages/Blogs/Blog4";
import Blog5 from "./pages/Blogs/Blog5";
import Blog6 from "./pages/Blogs/Blog6";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route path="*" element={<NotFound />} />
        <Route element={<Blog1 />} path="/blog/1" />
        <Route element={<Blog2 />} path="/blog/2" />
        <Route element={<Blog3 />} path="/blog/3" />
        <Route element={<Blog4 />} path="/blog/4" />
        <Route element={<Blog5 />} path="/blog/5" />
        <Route element={<Blog6 />} path="/blog/6" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
