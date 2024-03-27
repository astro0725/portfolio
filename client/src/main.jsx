import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import Resume from './pages/Resume/Resume.jsx';
import About from './pages/About/About.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <About/>,
      },
      {
        path: '/resume',
        element: <Resume/>,
      },
      {
        path: '/portfolio',
        element: <Portfolio/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)