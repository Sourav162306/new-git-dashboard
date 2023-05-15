import {AiFillDashboard, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillGithub, AiFillCopyrightCircle} from 'react-icons/ai'
import {FaBtc, FaLocationArrow} from 'react-icons/fa'
import {IoIosCopy, IoIosContact} from 'react-icons/io'
import {HiUsers, HiOutlinePhoneMissedCall} from 'react-icons/hi'
import {FiSettings, FiMail} from 'react-icons/fi'
import {BiHelpCircle} from 'react-icons/bi'

import './index.css'

const Footer = () => (
  
        <div className='footer-container'>
            <div className='small-parent-container'>
                <div className='small-footer-container'>
                    <h3 className='footer-header'>Find all of the features</h3>
                    <div className="footer-items-container-main">
                        <AiFillDashboard className="footer-new-react-icons" />
                        <a href="/dashboard">Dashboard</a>
                    </div>
                    <div className="footer-items-container-main">
                        <FaBtc className="footer-new-react-icons" />
                        <a href="/transactions">Transactions</a>
                    </div>
                    <div className="footer-items-container-main">
                        <IoIosCopy className="footer-new-react-icons" />
                        <a href="/schedules">Schedules</a>
                    </div>
                    <div className="footer-items-container-main">
                        <HiUsers className="footer-new-react-icons" />
                        <a href="/users">Users</a>
                    </div>
                    <div className="footer-items-container-main">
                        <FiSettings className="footer-new-react-icons" />
                        <a href="/settings">Settings</a>
                    </div>
                    <div className="footer-items-container-main">
                        <BiHelpCircle className="footer-new-react-icons" />
                        <a href="/help">Help</a>
                    </div>
                    <div className="footer-items-container-main">
                        <IoIosContact className="footer-new-react-icons" />
                        <a href="/contact-us">Contact us</a>
                    </div>
                </div>
                {/*  */}
                <div className='small-footer-container'>
                    <h3 className='footer-header'>Find us</h3>
                    <div className="footer-items-container-main">
                        <FaLocationArrow className="footer-new-react-icons" />
                        <a href="https://goo.gl/maps/bmTD7YFMqB52J5cm9" rel='noreferrer' target='_blank'>Mumbai 400064</a>
                    </div>
                    <div className="footer-items-container-main">
                        <HiOutlinePhoneMissedCall className="footer-new-react-icons" />
                        <a href="tel:8787791187">8787791187</a>
                    </div>
                    <div className="footer-items-container-main">
                        <FiMail className="footer-new-react-icons" />
                        <a href="mailto:sourav557paul@mail.com">sourav557paul@mail.com</a>
                    </div>
                </div>
                {/*  */}
                <div className='small-footer-container'>
                    <h3 className='footer-header'>Follow us on social media</h3>
                    <div className='small-footer-container-icons'>
                        <div className="footer-items-container-main">
                            <a href="https://www.facebook.com/" rel='noreferrer' target='_blank'>
                                <AiFillFacebook className="footer-new-react-icons" />
                            </a>
                        </div>
                        <div className="footer-items-container-main">
                            <a href="https://www.instagram.com/" rel='noreferrer' target='_blank'>
                                <AiFillInstagram className="footer-new-react-icons" />
                            </a>
                        </div>
                        <div className="footer-items-container-main">
                            <a href="https://www.linkedin.com" rel='noreferrer' target='_blank'>
                                <AiFillLinkedin className="footer-new-react-icons" />
                            </a>
                        </div>
                        <div className="footer-items-container-main">
                            <a href="https://twitter.com/i/flow/login" rel='noreferrer' target='_blank'>
                                <AiFillTwitterCircle className="footer-new-react-icons" />
                            </a>
                        </div>
                        <div className="footer-items-container-main">
                            <a href="https://github.com/" rel='noreferrer' target='_blank'>
                                <AiFillGithub className="footer-new-react-icons" />
                            </a>
                        </div>

                    </div>
                </div>
                {/*  */}
            </div>
            <div className='copyright-container'>
                <AiFillCopyrightCircle className="footer-new-react-icons" />
                <h5 className='copyright-text'>Copyright @ 2023 Design & Developed by Sourav Paul</h5>
            </div>
        </div>
      
  )
  
  export default Footer