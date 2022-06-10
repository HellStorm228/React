import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPages from "../pages/PostIdPages";
import Login from "../pages/Login";


export const privateRoutes = [
    {path: '/about', element: <About />},
    {path: '/posts', element: <Posts />},
    {path: '/posts/:id', element: <PostIdPages />},
    {path: '/', element: <Posts />},
]

export const publicRoutes = [
    {path: '/login', element: <Login />},
    {path: 'posts/:id', element: <Login />}
]