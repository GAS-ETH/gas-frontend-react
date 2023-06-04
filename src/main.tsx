import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReviewModal } from "./components/ReviewModal";
import { SignUp } from "./pages/SignUp";
import { Provider } from "react-redux";
import store from "./store/Store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/review",
    element: <ReviewModal />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
