import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Products from "./Components/Product/Products.jsx";
import MainLayouts from "./Layouts/MainLayouts/MainLayouts";
import Users from "./Components/Users/Users";
import UserDetails from "./Components/UserDetails/UserDetails";
import NotFound404 from "./Components/NotFound404/NotFound404";
import Post from "./Components/Posts/Posts";
import PostDetails from "./Components/PostDetails/PostDetails";

function App() {
  // create router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children: [
        { path: "/home", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        { path: "/contact", element: <Contact></Contact> },
        { path: "/product", element: <Products></Products> },
        {
          path: "/post",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/posts");
          },
          element: <Post></Post>,
        },
        {
          path: "/post/:postId",
          
          loader: async ({params}) =>{
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
          },
          element: <PostDetails></PostDetails>

        },
        {
          path: "/users",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Users></Users>,
        },
        {
          path: "/user/:userId",
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.userId}`
            );
          },
          element: <UserDetails></UserDetails>,
        },

        { path: "*", element: <NotFound404></NotFound404> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
