import SidebarItem from './SidebarItem'
import items from '../data/sidebar.json'
import { useState } from 'react'

export default function Sidebar() {
  const [showNav, setShowNav] = useState(false)
  function showNavBar() {
    setShowNav(!showNav)
  }

  return (
    <>
      <div style={{ right: showNav ? '240px' : '0' }} className="bars-icon" onClick={showNavBar}>
        <i className="bi bi-list"></i>
      </div>
      <div className={showNav ? 'show-navbar sidebar' : 'sidebar'}>
        <div className="logo">
          <p>airline</p>
        </div>
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
    </>
  )
}
