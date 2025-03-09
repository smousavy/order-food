import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
function Layout() {
  return (
    <div className="container-full mx-auto flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto my-14 grow">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
