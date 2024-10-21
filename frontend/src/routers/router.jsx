import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import CartPage from "../pages/book/CartPage";
import Checkout from "../pages/book/Checkout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="addToCart" element={<CartPage />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="orders" element={<h1>Give the Order</h1>} />
      <Route path="about" element={<h1>We build a book store</h1>} />

      <Route path="admin">
        <Route index element={<h1>Admin Login</h1>} />
        <Route path="dashboard">
          <Route index element={<h1>User Dashboard</h1>} />
          <Route path="add-new-book" element={<h1>Add New Book</h1>} />
          <Route path="edit-book/:id" element={<h1>Edit books</h1>} />
          <Route path="manage-book" element={<h1>Manage Books</h1>} />
        </Route>
      </Route>
    </Route>
  )
);

export { router };
