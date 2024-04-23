import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = ({childern}) => {
  return (
    <>
      <Header />
      {childern}
      <Outlet />
      </>
  )
}

export default Layout