import React, { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Overview from './components/Overview';
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

function App() {
  const { store, setLoading, login, logout } = useContext(StoreContext)
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    checkAuth()
      .then(res => {
        if (res.data.message) return setLoading(false)
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
    <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
      <Navbar />
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
      <Routes>
        <Route index element={<Home />} />
        <Route path="overview" element={<Overview />} />
        <Route path="getstarted" element={<GetStarted />} />
        <Route path="features" element={<Featrues />} />
        <Route path="learn" element={<Learn />} />
        <Route path="support" element={<Support />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
