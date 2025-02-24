import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import { Root } from "./root/Root.jsx";
import { Contacts } from "./root/Contacts.jsx";


const router = createBrowserRouter([
  {path: "/",
  element: <Root/>,
  },
  {path: "/Contacts",
  element: <Contacts />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

