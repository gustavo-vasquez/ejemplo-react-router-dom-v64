import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog, { loaderBlog } from "../pages/Blog";
import LayoutPublic from "../layout/LayoutPublic";
import NotFound from "../pages/NotFound";
import Post, { loaderPost } from "../pages/Post";

// creo mis rutas a tráves del nuevo 'createBrowserRouter'
export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                errorElement: <NotFound />, // el error se anida en un children para que se dibuje el layout también al mostrarse
                children: [
                    {
                        index: true, // el index reconoce este elemento como la entrada por defecto dentro de <Outlet /> en el layout
                        element: <Home />,
                    },
                    {
                        path: "/about",
                        element: <About />,
                    },
                    {
                        path: "/blog",
                        element: <Blog />,
                        loader: loaderBlog
                    },
                    {
                        path: "/blog/:id", // url con parámetros
                        element: <Post />,
                        loader: loaderPost
                    },
                ],
            }
        ]
    },
]);
