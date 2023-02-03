import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Overview from './components/Overview';
import GetStarted from './components/GetStarted';
import Featrues from './components/Features';
import Learn from './components/Learn';
import Support from './components/Support';
import Signin from './components/Signin';
import Register from './components/Register';
import { StoreProvider } from './context/store/StoreContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResetPassword from './components/ResetPassword';

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'overview',
        element: <Overview />
      },
      {
        path: 'getstarted',
        element: <GetStarted />
      },
      {
        path: 'features',
        element: <Featrues />
      },
      {
        path: 'learn',
        element: <Learn />
      },
      {
        path: 'support',
        element: <Support />
      },
    ]
  },
  {
    path: '/signin',
    element: <Signin />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/resetpassword',
    element: <ResetPassword />
  },
  {
    path: '/resetpasswordlink/:id',
    element: <ResetPassword />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
