import React from 'react'
import "./style.css"
import { Icons } from '../../assets/icons';

function LayoutHeader() {
  return (
    <div className="header-section d-flex justify-content-between align-items-center p-4">
     <div className='app-menu'> 
       {Icons.HiMenu}
     </div>
     <div className='full-screen'>
      {Icons.AiOutlineFullscreenExit}
     </div>
  </div>
  )
}

export default LayoutHeader;