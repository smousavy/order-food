// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { TbBasketCheck } from "react-icons/tb";

function Order() {
  const newOrder = useLoaderData();
  const { id, totalPrice, userName, userAddress } = newOrder[0];
  console.log(id);
  return (
    <div className="mx-auto flex w-3/5 flex-col justify-center rounded-md border-2 border-theme-200 bg-theme-100 p-14">
      <div className="mx-auto h-24 w-24 rounded-full border-2 border-green-200 bg-green-100 p-4">
        <TbBasketCheck className="text-6xl text-green-700" />
      </div>
      <p className="my-7 mb-8 text-center text-xl font-semibold text-theme-600">
        سفارش شما ثبت شد.
      </p>
      <p className="my-7 mb-4 text-center text-base text-theme-800">
        سفارش شما با شناسه{id} تا دقایقی دیگر به ادرس {userAddress} ارسال میشود
        .
      </p>
      <p className="my-7 mb-14 text-center text-base text-theme-800">
        مبلغ{totalPrice} تومان هزینه سفارش شماست
      </p>
      <p className="text-center text-theme-700">
        {userName} جان از غذای خود لذت ببرید
      </p>
    </div>
  );
}
export async function Loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
