import "./index.css";
import Layout from "./ui/Layout";
import Home from "./ui/Home";
import Error from "./ui/Error";

import { Loader as menuLoader } from "./ui/Home";
import { Loader as orderLoader } from "./feature/order/Order";
import CreateOrder, {
  action as createOrderAction,
} from "./feature/order/CreateOrder";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./feature/cart/Cart";
import Order from "./feature/order/Order";
import { getMenu } from "./services/apiRestaurant";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: menuLoader,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
      },
    ],
  },
]);
export async function Loader() {
  const menu = await getMenu();
  return menu;
}
function App() {
  return <RouterProvider router={router} />;
}

export default App;
