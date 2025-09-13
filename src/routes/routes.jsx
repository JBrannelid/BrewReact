import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";

// Configure and define the routes with  React Router v7
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/booking",
        element: <BookingPage />,
      },
    ],
  },
]);
