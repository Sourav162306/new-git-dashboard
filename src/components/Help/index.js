import {FiMail} from 'react-icons/fi'
import {HiOutlinePhoneMissedCall} from 'react-icons/hi'

import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const Help = () => (
  <>
    <Header pageTitle='Help' />
    <div className="main-product-sections">
      <div className='product-container'>
        <h2>How can I help you!</h2>
        <div className='contact-us-main-div'>
            <div className='contact-us-sub-div'>
              <div className="contact-items-container-main">
                  <HiOutlinePhoneMissedCall className="contact-us-new-react-icons" />
                  <a href="tel:1234567890">1234567890</a>
                  <h3>Talk To Customer Support Expert</h3>
              </div>
            </div>
            <div className='contact-us-sub-div'>
              <div className="contact-items-container-main">
                  <FiMail className="contact-us-new-react-icons" />
                  <a href="mailto:sourav557paul@mail.com">sourav557paul@mail.com</a>
                  <h3>Contact Customer Support</h3>
              </div>
            </div>
        </div>
        <Footer/>
      </div>
    </div>
  </>
)

export default Help
