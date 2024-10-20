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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Test />} />
    </Route>
  )
);

export { router };
