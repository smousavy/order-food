import { useMemo } from "react";
import MenuCat from "./MenuCat";

function Menu({ menu }) {
  const memoMenu = useMemo(() => {
    return menu.map((cat) => {
      return <MenuCat key={cat.categoryId} cat={cat} />;
    });
  }, [menu]);
  return (
    <>
      <div>{memoMenu}</div>
    </>
  );
}

export default Menu;
