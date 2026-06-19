import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "@/layout/Nav";
import Footer from "@/layout/Footer";

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);
  return (
    <div className="flex flex-col min-h-screen bg-okn-deep text-okn-palemint">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
