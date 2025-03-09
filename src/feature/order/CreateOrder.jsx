import { Form, redirect, useActionData } from "react-router-dom";
import { createOrder, createOrderDetail } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";
import {
  getCart,
  getTotalCartPrice,
  getTotalCartQuantity,
} from "../cart/cartSlice";
import Button from "../../ui/Button";
import { phoneNumberValidator } from "@persian-tools/persian-tools";

function CreateOrder() {
  const cart = useSelector(getCart);
  const totalPrice = useSelector(getTotalCartPrice);
  const totalQuantity = useSelector(getTotalCartQuantity);
  const formErrors = useActionData();
  return (
    <div>
      <div className="py-3">
        <p className="text-l my-7 font-medium">
          با پر کردن فرم زیر سفارش خود را نهایی کنید.
        </p>
      </div>

      <Form method="POST">
        <div className="flex flex-row items-center py-4">
          <label className="w-28 font-semibold text-theme-700">نام :</label>
          <input
            type="text"
            name="userName"
            className="focus:shadow-outline ml-3 w-80 appearance-none rounded border  px-3 py-2 leading-tight text-theme-700 shadow focus:outline-none"
          />
          {formErrors?.userName && (
            <p className="text-sm text-red-800">{formErrors.userName}</p>
          )}
        </div>

        <div className="flex flex-row items-center py-4">
          <label className="w-28 font-semibold text-theme-700">
            شماره تماس
          </label>
          <input
            type="tel"
            name="userPhone"
            className="focus:shadow-outline ml-3 w-80 appearance-none rounded border  px-3 py-2 leading-tight text-theme-700 shadow focus:outline-none"
          />
          {formErrors?.userPhone && (
            <p className="text-sm text-red-800">{formErrors.userPhone}</p>
          )}
        </div>

        <div className="flex flex-row items-center py-4">
          <label className="w-28 font-semibold text-theme-700">آدرس</label>
          <input
            type="text"
            name="userAddress"
            className="focus:shadow-outline ml-3 w-80 appearance-none rounded border  px-3 py-2 leading-tight text-theme-700 shadow focus:outline-none"
          />
          {formErrors?.userAddress && (
            <p className="text-sm text-red-800">{formErrors.userAddress}</p>
          )}
        </div>
        <input type="hidden" value={JSON.stringify(cart)} name="cart" />
        <input type="hidden" value={totalPrice} name="totalPrice" />
        <input type="hidden" value={totalQuantity} name="totalQuantity" />
        <div className="mt-6 flex gap-3">
          <Button type="primary">سفارش غذا</Button>
        </div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const cart = JSON.parse(data.cart);
  const order = { ...(delete data.cart && data) };
  const errors = {};
  if (!phoneNumberValidator(order.userPhone)) {
    errors.userPhone = "شماره تماس صحیح وارد کنید.";
  }
  if (!order.userName) {
    errors.userName = "نام خود را وارد کنید";
  }
  if (!order.userAddress) {
    errors.userAddress = "آدرس خود را وارد کنید";
  }
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  if (newOrder) {
    const cartByorderId = cart.map((item) => {
      item.orderId = newOrder[0].id;
      return item;
    });
    await createOrderDetail(cartByorderId);
  }
  return redirect(`/order/${newOrder[0].id}`);
}
export default CreateOrder;
