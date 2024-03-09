import React from 'react'
import { Link } from 'react-router-dom';

import './Sidebar.css';

const page = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-in">
            <div className="sidebar-options">
                <div className="sidebar-option">
                    <div className="sidebar-option-in">
                        <Link className='sidebar-option-in-link' to='/student'>Home</Link>
                    </div>
                </div>
                <div className="sidebar-option">
                    <div className="sidebar-option-in">
                        <Link className='sidebar-option-in-link' to='/student/profile'>Profile</Link>
                    </div>
                </div>
                <div className="sidebar-option">
                    <div className="sidebar-option-in">
                        <Link className='sidebar-option-in-link' to='/student/clubregistration'>Projects</Link>
                    </div>
                </div>
                <div className="sidebar-option">
                    <div className="sidebar-option-in">
                        <Link className='sidebar-option-in-link' to='/student/viewregistration'>Attendance</Link>
                    </div>
                </div>
                <div className="sidebar-option">
                    <div className="sidebar-option-in">
                        <Link className='sidebar-option-in-link' to='/student/viewlog'>Reports</Link>
                    </div>
                </div>
                <div className="sidebar-option">
                    <div className="sidebar-option-in">
                        <Link className='sidebar-option-in-link' to='/student/grievance'>Greviances</Link>
                    </div>
                </div>
                <div className="sidebar-option">
                    <div className="sidebar-option-in">
                        <Link className='sidebar-option-in-link' to='/student/SIL'>Tickets</Link>
                    </div>
                </div>
                <div className="sidebar-option">
                    <div className="sidebar-option-in">
                        <Link className='sidebar-option-in-link' to='/'>Logout</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page