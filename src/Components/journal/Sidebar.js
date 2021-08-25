

import React from 'react'
import { Link } from 'react-router-dom'
import Entry from './Entry'

function Sidebar() {
  const entries = [1,2,3,4,5,6,7,3,4,5,6,7,7,3,4,5,6,]

  return (
    <div className="sidebar_container">

      <div className="sidebar_nav-title">
        <h3><i className="fas fa-user mr-5"></i>Edinson</h3><Link className="link_sidebar-btn" to="#">Logout</Link>
      </div>

      <div className="sidebar_btn-add pointer mt-15">
      <i className="fas fa-plus-circle"></i>
      <span className="mt-5">Add new entry</span>
      </div>

      <div className="sidebar_list-entry mt-15">
        { entries.map((entry, index) =>{
          return <Entry key={index}/>
        })}
      </div>

    </div>
  )
}

export default Sidebar
