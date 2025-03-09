import { TbBasketX } from "react-icons/tb";
import Button from "../../ui/Button";

function EmptyCart() {
  return (
    <div className="mx-auto flex w-96 flex-col justify-center rounded-md border-2 border-theme-200 bg-theme-100 p-14">
      <div className="mx-auto h-24 w-24 rounded-full border-2 border-red-200 bg-red-100 p-4">
        <TbBasketX className="text-6xl text-red-900" />
      </div>
      <p className="my-7 text-center text-xl text-theme-600">
        سفارشی ثبت نکرده اید
      </p>
      <p className="my-7 text-center text-base">
        ابتدا محصولات مورد نظر را به سبد اضافه و سفارش خود را تکمیل کنید.
      </p>
      <div className="mx-auto">
        <Button to="/" type="primary">
          سفارش از منو
        </Button>
      </div>
    </div>
  );
}

export default EmptyCart;
