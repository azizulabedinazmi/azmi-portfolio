import { FC } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
//Components
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Gallery from "./components/gallery/Gallery";
import SideMenu from "./components/sideMenu/SideMenu";
//Styles
import BlogPost from "./components/blog-post/BlogPost";
import NotFound from "./components/not-found/NotFound";
import "./core-ui/index.css";


const App: FC = () => {
  return (
    <Router>
      <SideMenu />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:title" element={<BlogPost/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;
