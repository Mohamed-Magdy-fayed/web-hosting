import React, { useContext, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Home from './components/Home';
import GetStarted from './components/GetStarted';
import Featrues from './components/Features';
import Learn from './components/Learn';
import Support from './components/Support';
import { toast, ToastContainer } from 'react-toastify';
import { checkAuth } from './api/auth';
import AppLoading from './components/shared/AppLoading';
import StoreContext from './context/store/StoreContext';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Dashboard from './components/dashboardComponents/Dashboard';

function App() {
  const { store, setLoading, login, logout } = useContext(StoreContext)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setLoading(true)
    checkAuth()
      .then(res => {
        if (res.data.message) {
          if (location.pathname.includes('dashboard')) {
            navigate('/signin')
          }
          return setLoading(false)
        }

        if (res.data.user) {
          login({ user: res.data.user })
          setLoading(false)
        }
      })
      .catch(e => {
        toast.error(e.response.data.message)
        logout()
        setLoading(false)
        console.log(e);
      })
  }, [])

  if (store.loading) return <AppLoading />

  return (
    <div className='min-h-screen flex flex-col justify-start'>
      <NavbarComponent />
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
      <div className='flex-grow flex'>
        <Routes>
          <Route index element={<Home />} />
          <Route path="getstarted/*" element={<GetStarted />} />
          <Route path="features" element={<Featrues />} />
          <Route path="learn" element={<Learn />} />
          <Route path="support" element={<Support />} />
          <Route path="cart" element={<Cart />} />
          <Route path="dashboard/*" element={<Dashboard />}/>
        </Routes>
      </div>
      {!location.pathname.includes('/dashboard') && <Footer />}
    </div>
  );
}

export default App;
