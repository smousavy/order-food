import { useLoaderData } from "react-router-dom";
import { getMenu } from "./../services/apiRestaurant";
import Menu from "../feature/menu/Menu";

function Home() {
  const menu = useLoaderData();
  return (
    <div>
      <h1 className="mb-8 mt-4 text-3xl font-bold text-theme-600">
        رستوران یادگار تجربه ماندگار
      </h1>

      <Menu menu={menu} />
    </div>
  );
}
export async function Loader() {
  const menu = await getMenu();
  return menu;
}
export default Home;
