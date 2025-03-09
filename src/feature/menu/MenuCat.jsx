import MenuItem from "./MenuItem";

function MenuCat({ cat }) {
  return (
    <div key={cat.categoryId}>
      <h2 className="mb-3 mt-8 border-r-8 border-theme-500 pb-1 pr-2 text-2xl text-theme-800">
        {cat.category}
      </h2>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
        {cat.products.map((menuFood) => (
          <MenuItem key={menuFood.id} food={menuFood} />
        ))}
      </ul>
    </div>
  );
}

export default MenuCat;
