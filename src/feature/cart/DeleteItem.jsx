import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import { MdOutlineDeleteForever } from "react-icons/md";

function DeleteItem({ id }) {
  const dispatch = useDispatch();

  return (
    <MdOutlineDeleteForever
      className="align-center mr-1  text-theme-500"
      onClick={() => dispatch(deleteItem(id))}
    />
  );
}

export default DeleteItem;
