import React, { useEffect } from 'react'
import Header from '../../components/header/header'
import BreadCrumbArea from './breadCrumbArea/BreadCrumbArea'
import LoginRegister from './login-register/LoginRegister'

const Login = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <BreadCrumbArea/>
    <LoginRegister/>
    
    </>
  
  )
}

export default Login
