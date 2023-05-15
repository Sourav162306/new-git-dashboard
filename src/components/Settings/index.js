import {AiFillDashboard} from 'react-icons/ai'
import {FaBtc} from 'react-icons/fa'
import {IoIosCopy} from 'react-icons/io'
import {HiUsers} from 'react-icons/hi'

import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Settings = () => (
  <>
    <Header pageTitle='Settings' />
    <div className="main-product-sections">
      <div className='product-container'>
        <div className='big-container-main'>
          <div className='settings-big-cart-container'>
            <AiFillDashboard className="" />
            <p>Dashboard Settings</p>
          </div>
          <div className='settings-big-cart-container'>
            <FaBtc className="" />
            <p>Transaction Settings</p>
          </div>
          <div className='settings-big-cart-container'>
            <IoIosCopy className="" />
            <p>Schedule Settings</p>
          </div>
          <div className='settings-big-cart-container'>
            <HiUsers className="" />
            <p>User Settings</p>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  </>
)

export default Settings
