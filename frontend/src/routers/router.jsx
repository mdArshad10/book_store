import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home/Home";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<HomePage/>} />
      </Route>
    )
  );

  export {router};