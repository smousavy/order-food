import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
import { FaMinus, FaPlus } from "react-icons/fa";

function UpdateItemQuantity({ id, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <>
      <FaMinus
        className="align-center mr-1  text-theme-500"
        onClick={() => dispatch(decreaseItemQuantity(id))}
      />
      <span className="text-xl font-medium text-theme-600">
        {currentQuantity}
      </span>
      <FaPlus
        className="align-center mr-1  text-theme-500"
        onClick={() => dispatch(increaseItemQuantity(id))}
      />
    </>
  );
}

export default UpdateItemQuantity;
