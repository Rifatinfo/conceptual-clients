import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import AddProduct from "../Components/AddProduct/AddProduct";
import AddToCart from "../Components/AddToCart/AddToCart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/add-product",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/add-to-cart",
                element : <AddToCart></AddToCart>
            }
        ],
    },
]);