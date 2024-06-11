/**
 * src/main.jsx This file is the entry point for the application.
 */

// Import required dependencies from React and other libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Import components for different pages
import App from './App.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/HomePage.jsx';
import DeviceActions from './pages/DeviceActionsPage';
import PaymentActions from './pages/PaymentActionsPage';

// Create a router configuration using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home /> // The Home page component
        },
        {
        path: '/device',
        element: <DeviceActions /> // The DeviceActions page component
        },
        {
        path: '/payment',
        element: <PaymentActions /> // The Payment Action page component
        }

    ]
  }
]);

// Render the root component using ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
