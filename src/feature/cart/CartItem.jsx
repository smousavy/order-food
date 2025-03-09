function CartItem({ item }) {
  const { title, quantity, totalPrice, img } = item;
  return (
    <div className="my-3 flex flex-row justify-start py-2">
      <img src={img?.imageSrc} className="ml-3 h-24 w-24" alt={title} />
      <div className="mr-2 mt-2 flex flex-col justify-between">
        <h6 className="mb-2 text-lg text-theme-700">{title}</h6>
        <p className="mb-2 pr-3 text-base text-theme-900">
          {" "}
          تعداد : {quantity}
        </p>
        <p className="mb-2 pr-3 text-base font-medium text-theme-900">
          {" "}
          قیمت نهایی: {totalPrice}
        </p>
      </div>
    </div>
  );
}

export default CartItem;
