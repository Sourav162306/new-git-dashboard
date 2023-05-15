import { Redirect, withRouter} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Cookies from 'js-cookie'
import {AiFillDashboard, AiFillCopyrightCircle} from 'react-icons/ai'
import {FaBtc} from 'react-icons/fa'
import {IoIosCopy} from 'react-icons/io'
import {HiUsers} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'
import {GrLogout} from 'react-icons/gr'

import './index.css'

const Header = props => {
  const {logout} = useAuth0()
  const logoutMain = () => {
    Cookies.remove('get_user')
    logout()
    return(

      <Redirect to="/login" />
    )
  }
  const {pageTitle} = props

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <h1>{pageTitle}</h1>
          <button type="button" className="nav-mobile-btn">
            <GrLogout
              className='log-out-logo'
              onClick={logout}
            />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <h1>{pageTitle}</h1>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={logoutMain}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="sidenav">
        <h1 className='board-heading'>Board.</h1>
        <div className='board-main-container'>
          <div className='main-side-menu-container'>
            <div className="items-container-main">
              <AiFillDashboard className="new-react-icons" />
              <a href="/dashboard">Dashboard</a>
            </div>
            <div className="items-container-main">
              <FaBtc className="new-react-icons" />
              <a href="/transactions">Transactions</a>
            </div>
            <div className="items-container-main">
              <IoIosCopy className="new-react-icons" />
              <a href="/schedules">Schedules</a>
            </div>
            <div className="items-container-main">
              <HiUsers className="new-react-icons" />
              <a href="/users">Users</a>
            </div>
            <div className="items-container-main">
              <FiSettings className="new-react-icons" />
              <a href="/settings">Settings</a>
            </div>
          </div>
          <div className='main-side-menu-container'>
            <a href="/help">Help</a>
            <a href="/contact-us">Contact US</a>
          </div>
        </div>
        <div className='copyright-header-container'>
            <AiFillCopyrightCircle className="header-new-react-icons" />
            <h5 className='copyright-header-text'>Copyright @ 2023</h5>
        </div>
        <h5 className='copyright-header-text'>Design & Developed by Sourav Paul</h5>
      </div>
      <div className="nav-menu-mobile">
        <div className='mobile-icons-container'>
          <div className="items-container-main">
            
            <a href="/dashboard">
              <AiFillDashboard className="new-react-icons" />
            </a>
          </div>
          <div className="items-container-main">
            
            <a href="/transactions">
              <FaBtc className="new-react-icons" />
            </a>
          </div>
          <div className="items-container-main">
    
            <a href="/schedules">
              <IoIosCopy className="new-react-icons" />
            </a>
          </div>
          <div className="items-container-main">
            
            <a href="/users">
              <HiUsers className="new-react-icons" />
            </a>
          </div>
          <div className="items-container-main">
            
            <a href="/settings">
              <FiSettings className="new-react-icons" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
