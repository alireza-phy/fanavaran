import React from "react";
import { routes } from "./Routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/layout";
import { Outlet } from "react-router-dom";
import Home from "../pages/home";
import Category from "../pages/category";
import SubCategory from "../pages/subcategory";
import Product from "../pages/product";
import Management from "../pages/management";
import SubCategoriesManagement from "../pages/subCategoriesManagement";
import ProductsManagement from "../pages/productsManagement";

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
      { path: routes.subcategory, element: <SubCategory /> },
      { path: routes.product, element: <Product /> },
      { path: routes.management, element: <Management /> },
      {
        path: routes.subCategoriesManagement,
        element: <SubCategoriesManagement />,
      },
      { path: routes.productsManagement, element: <ProductsManagement /> },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
