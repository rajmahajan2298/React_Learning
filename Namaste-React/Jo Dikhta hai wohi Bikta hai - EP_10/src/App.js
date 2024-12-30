import React, {lazy, Suspense} from "react";
import ReactDom from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "../index.css";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const Grocery = lazy(() => import("./components/Grocery"));

const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer></Shimmer>}>
                <Grocery />
                </Suspense>
            },
            {
                path: "/restuarants/:resId",
                element: <ResturantMenu />
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRoute} />);

