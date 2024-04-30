
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from "./Avaliação/NavBarComponent";
import Contato from './Pages/Contato';
import Sobre from "./Pages/Sobre";

const router = createBrowserRouter([
  {

    path: "/Home",
    element: <Home />,

  },
  {

    path: "/Contato",
    element: <Contato />,

  },
  {

    path: "/Sobre",
    element: <Sobre />

  },
  {

    path: "/login",
    element: <login />

  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <NavBarComponent />
    <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
