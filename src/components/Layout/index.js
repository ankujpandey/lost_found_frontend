import React from 'react'
import Sidebar from '../Sidebar'
import "./style.css"
import LayoutHeader from '../LayoutHeader'
import LayoutFooter from '../LayoutFooter'
import LayoutRoutes from '../../routes/LayoutRoutes'


function Layout() {
  return (
    <div className="layout-page">
      <div
        className="position-fixed w-25 h-100"
        style={{
          backgroundColor: "#ffff",
          borderRight: "0.3px solid #ddd",
        }}
      >
        <Sidebar />
      </div>
      <main className="main-body">
        <LayoutHeader />
        <LayoutRoutes/>
        <LayoutFooter />
      </main>
    </div>
  );
}

export default Layout