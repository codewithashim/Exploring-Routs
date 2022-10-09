import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Products from "./Components/Product/Products.jsx";

function App() {
  // create router

  const router = createBrowserRouter([
    { path: "/home", element: <Home></Home> },
    { path: "/about", element: <About></About> },
    { path: "/contact", element: <Contact></Contact> },
    { path: "/product", element: <Products></Products> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
