import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import { Root } from "./root/Root.jsx";
import { About } from "./root/About.jsx";
import { Projects } from "./root/Projects.jsx";
import { Contacts } from "./root/Contacts.jsx";


const router = createBrowserRouter([
  {path: "/",
  element: <Root/>,
  },
  {path: "/About",
  element: <About/>,
  },
  {path: "/Projects",
  element: <Projects />,
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

