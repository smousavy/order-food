import { FaPlus } from "react-icons/fa";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import { addCommas } from "@persian-tools/persian-tools";
function MenuItem({ food }) {
  const dispatch = useDispatch();
  const { id, title, description, images, price } = food;
  const itemQuantity = useSelector(getCurrentQuantityById(id));
  const img = images.at(0);
  function handleAddToCart() {
    const newItem = {
      foodId: id,
      title,
      quantity: 1,
      price,
      totalPrice: price * 1,
      img,
    };
    dispatch(addItem(newItem));
  }
  return (
    <li className="grid-rows mt-5 grid gap-4">
      <div className="flex flex-row justify-start">
        <img src={img?.imageSrc} className="h-32 w-32" alt={title} />
        <div className="mr-2 mt-2 flex flex-col justify-between">
          <h6 className="mb-2 text-xl text-theme-700">{title}</h6>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex justify-between border-t-2 border-theme-200">
        <span className="h-9 text-lg font-semibold text-theme-900">
          {addCommas(price)} تومان
        </span>
        {itemQuantity === 0 && (
          <button
            onClick={handleAddToCart}
            className=" flex h-9 w-24 items-center justify-center self-end rounded-sm bg-theme-200"
          >
            <span className="text-theme-600"> افزودن </span>
            <FaPlus className="align-center mr-1  text-theme-500" />
          </button>
        )}
        {itemQuantity > 0 && (
          <div className=" flex h-9 w-24 items-center justify-evenly self-end rounded-sm bg-theme-200">
            <UpdateItemQuantity id={id} currentQuantity={itemQuantity} />
          </div>
        )}
      </div>
    </li>
  );
}

export default MenuItem;
