import { Outlet } from "react-router-dom";
import Header from "./SiteHeader";
import Footer from "./Footer";
export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-glass">
      <Header />

      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
