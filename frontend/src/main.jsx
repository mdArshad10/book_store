import { createRoot } from "react-dom/client";
import { router } from "./routers/router.jsx";
import "./index.css";
import "sweetalert2/dist/sweetalert2.js";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </Provider>
);
