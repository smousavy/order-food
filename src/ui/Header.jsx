import { Link } from "react-router-dom";
import CartOverview from "../feature/cart/CartOverview";
function Header() {
  return (
    <header className="h-18  bg-theme-500">
      <div className=" container mx-auto flex justify-between">
        <div className="flex items-center">
          <span className="text-l ml-5 font-bold text-theme-50">
            سلام کاربر
          </span>
          <CartOverview />
          <Link className="text-l mx-5 font-bold text-theme-50" to="/">
            منو
          </Link>
        </div>

        <span className="flex items-center gap-1">
          <Link to="/">
            <img src="/img/logo.png" alt="سفارش غذای یادگار" className="h-16" />
          </Link>
        </span>
      </div>
    </header>
  );
}

export default Header;
