import {  createBrowserRouter } from "react-router-dom";
import BaseLayout from "../views/BaseLayout";
import Home from "../views/Home";
import Detail from "../views/Detail";
const url = 'https://phase2-aio.vercel.app'

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Home url={url} />
      },
      {
        path: '/products/:id',
        element: <Detail url={url} />
      }
    ]
  }
]);

export default router;