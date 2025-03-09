import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";

function Cart() {
  /* const username = useSelector((state) => state.user.username); */
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="py-3">
      <p className="text-l my-7 font-medium">
        درصورت تایید نهایی سفارش شما ثبت و در نزدیک ترین زمان ممکن ارسال میشود.
        پرداخت هزینه در زمان تحویل میباشد.
      </p>
      <ul className="mt-3 divide-y divide-theme-200 ">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div className=" mt-6 flex gap-3">
        <Button to="/order/new" type="primary">
          سفارش غذا
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          حذف کارت
        </Button>
      </div>
    </div>
  );
}

export default Cart;
