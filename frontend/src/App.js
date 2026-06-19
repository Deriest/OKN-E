import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Layout from "@/layout/Layout";
import Home from "@/pages/Home";
import Solution from "@/pages/Solution";
import Proof from "@/pages/Proof";
import Opportunity from "@/pages/Opportunity";
import Story from "@/pages/Story";
import Partner from "@/pages/Partner";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <div className="App bg-okn-deep min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/proof" element={<Proof />} />
            <Route path="/opportunity" element={<Opportunity />} />
            <Route path="/story" element={<Story />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster theme="dark" position="top-right" />
    </div>
  );
}

export default App;
