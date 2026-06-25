import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Nav from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import Solution from "@/pages/Solution";
import Proof from "@/pages/Proof";
import Opportunity from "@/pages/Opportunity";
import Story from "@/pages/Story";
import Partner from "@/pages/Partner";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="App bg-forest-base">
      <BrowserRouter>
        <ScrollToTop />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/proof" element={<Proof />} />
            <Route path="/opportunity" element={<Opportunity />} />
            <Route path="/story" element={<Story />} />
            <Route path="/partner" element={<Partner />} />
          </Routes>
        </main>
        <Footer />
        <Toaster theme="dark" position="top-center" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
