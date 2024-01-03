import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/HomePage";
import Donations from "./Pages/Donations";
import Mission from "./Pages/Missions";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import AdminPage from "./Pages/AdminPage";
import Committee from "./Pages/Committee";
import ActivitiesPage from "./Pages/ActitvitiesPage"
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./Components/AdminPage/state";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./Components/AdminPage/state/api";
import DonatePage from "./Pages/DonatePage";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if(process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

const router = createBrowserRouter([
  {
    exact: true,
    path: "/",
    element: <HomePage />,
  },
  {
    exact: true,
    path: "/donation",
    element: <Donations />,
  },
  {
    exact: true,
    path: "/donate",
    element: <DonatePage />,
  },
  {
    exact: true,
    path: "/mission",
    element: <Mission />,
  },
  {
    exact: true,
    path: "/about",
    element: <About />,
  },
  {
    exact: true,
    path: "/contact",
    element: <Contact />,
  },
  {
    exact: true,
    path: "/register",
    element: <Register />,
  },
  {
    exact: true,
    path: "/login",
    element: <Login />,
  },
  {
    exact: true,
    path: "/admin/*",
    element: <AdminPage />,
  },
  {
    exact: true,
    path: "/activities",
    element: <ActivitiesPage />,
  },
  {
    exact: true,
    path: "/committee",
    element: <Committee />,
  }
]);

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
