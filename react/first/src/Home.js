import React from 'react'
import Sidebar from './components/sidebar/Sidebar'

import './Home.css'

const Home = () => {
  return (
        <div className="HomeComponent">
            <div className="HomeComponent-in">
                <div className="Home-one">
                    <Sidebar />
                </div>
                <div className="Home-two">
                <h1>Student Dashboard</h1>
                </div>
            </div>
        </div>
  )
}

export default Home