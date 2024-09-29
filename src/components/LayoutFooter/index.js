import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css"

function LayoutFooter() {
  return (
    <div className='main_footer'>
    <strong>Footer <NavLink to="#" style={{
      color: "#00A9ff" 
    }}>Lost and Found System</NavLink>.</strong>
    All rights reserved.
    <div className="float-end d-none d-sm-inline-block">
      <b>Footer</b>
    </div>
  </div>
  )
}

export default LayoutFooter