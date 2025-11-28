import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";
import Advertise from "./components/pages/Advertise";
import ArticleDetail from "./components/pages/ArticleDetail";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
