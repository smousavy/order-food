import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import Button from "../../ui/Button";
function CartOverview() {
  const cart = useSelector(getCart);

  return (
    <Button to="/cart" className="inline-flex items-center ">
      <span className="text-l ms-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-theme-200  font-semibold text-theme-700">
        {cart.length}
      </span>
      <span className="text-l mr-2 font-bold text-theme-50">سفارش</span>
    </Button>
  );
}

export default CartOverview;
