import React from "react";
import { routes } from "./Routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/layout";
import { Outlet } from "react-router-dom";
import Home from "../pages/home";
import Category from "../pages/category";
import Product from "../pages/product";

const router = createBrowserRouter([
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      { path: routes.home, element: <Home /> },
      { path: routes.category, element: <Category /> },
      { path: routes.product, element: <Product /> },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
