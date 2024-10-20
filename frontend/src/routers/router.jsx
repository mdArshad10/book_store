import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import Test from "../pages/Test";
import CartPage from "../pages/book/CartPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="checkout" element={<CartPage />} />
      <Route path="orders" element={<h1>Give the Order</h1>} />
      <Route path="about" element={<h1>We build a book store</h1>} />
      <Route path="*" element={<Test />} />
    </Route>
  )
);

export { router };
