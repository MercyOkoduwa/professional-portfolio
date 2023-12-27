import { createBrowserRouter } from "react-router-dom";
import Layout from './../components/layouts/index';

import {Home} from "./../pages/index"
import { Blog } from "../pages/blog/Blog";


export const baseRoute = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children : [
            {
                index:true,
                element: <Home />
            },
            {
                path:"blog",
                element: <Blog/>
            }
        ]
    }
])