import React, { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
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
import Dashboard from './components/dashboardComponents/Dashboard';
import MyDomains from './components/dashboardComponents/MyDomains';
import GetNewDomain from './components/dashboardComponents/GetNewDomain';
import Transfer from './components/dashboardComponents/Transfer';
import Billing from './components/dashboardComponents/Billing';
import Account from './components/dashboardComponents/Account';

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
          <Route path="overview" element={<Overview />} />
          <Route path="getstarted" element={<GetStarted />} />
          <Route path="features" element={<Featrues />} />
          <Route path="learn" element={<Learn />} />
          <Route path="support" element={<Support />} />
          <Route path="cart" element={<Cart />} />
          <Route path="dashboard/*" element={<Dashboard />}>
            <Route index element={<MyDomains />} />
            <Route path="getnewdomain" element={<GetNewDomain />} />
            <Route path="transfer" element={<Transfer />} />
            <Route path="billing" element={<Billing />} />
            <Route path="account" element={<Account />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
