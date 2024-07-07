import { createBrowserRouter, redirect } from "react-router-dom";
import Toastify from "toastify-js";
import Login from "../views/Login";
import BaseLayout from "../views/BaseLayout";
import Products from "../views/Products";
import Categories from "../views/Categories";
import AddProduct from "../views/AddProduct";
import EditProduct from "../views/EditProduct";
const url = "https://phase2-aio.vercel.app";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login url={url} />,
    loader: () => {
      if (localStorage.access_token) {
        Toastify({
          text: "You already logged in",
          duration: 2000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#EF4C54",
            color: "#17202A",
            boxShadow: "0 5px 10px black",
            fontWeight: "bold",
          },
        }).showToast();
        return redirect('/');
      }
      return null;
    },
  },
  {
    element: <BaseLayout />,
    loader: () => {
      if (!localStorage.access_token) {
        Toastify({
          text: "Please log in first",
          duration: 2000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#EF4C54",
            color: "#17202A",
            boxShadow: "0 5px 10px black",
            fontWeight: "bold",
          },
        }).showToast();
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <Products url={url} />
      },
      {
        path: "/products",
        element: <Products url={url} />
      },
      {
        path: "/categories",
        element: <Categories url={url} />
      },
      {
        path: "/products/add",
        element: <AddProduct url={url} />
      },
      {
        path: "/products/edit/:id",
        element: <EditProduct url={url} />
      },
    ]
  },
]);

export default router;
