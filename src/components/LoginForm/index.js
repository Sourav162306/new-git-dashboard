// import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import {AiOutlineGoogle} from 'react-icons/ai'

import './index.css'

function LoginForm() {

  const {loginWithPopup, user} = useAuth0()

  // console.log(user)
  let showSubmitError = false
  const errorMsg = 'Username or Password is incorrect'
  

  if (user !== undefined){
    Cookies.set('get_user', user, {
      expires: 30,
      path: '/',
    })
    return (
      <Redirect to="/dashboard" />
    )
  }
  if (user  === undefined){
    Cookies.remove('get_user')
  }

const submitForm = event => {
   console.log(event.target.value)
   showSubmitError = true
    // event.preventDefault()
  }
  // console.log(showSubmitError)

  const  renderUsernameField = () => (
      <>
        <label className="input-label" htmlFor="username">
          Email Address
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          // value={username}
          // onChange={this.onChangeUsername}
        />
      </>
    )

  const   renderPasswordField = () => (
      <>
        <label className="input-label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          // value={password}
          // onChange={this.onChangePassword}
        />
      </>
    )


  return(
    (
      <div className="login-form-main-container">
        <div className='login-form-left-card-container'>
          <h1 className='board-heading'>Board.</h1>
        </div>
        <div className='login-form-card-container'>
          <div>
            <h1 className='sign-in-heading'>Sign In</h1>
            <p>Sign in to your account</p>
            
            <div className='button-div-container'>
              <button type="submit" className="login-button" onClick={loginWithPopup}>
                <AiOutlineGoogle className='google-icons'/>
                Sign in with Google
                </button>
              <button type="submit" className="login-button" onClick={loginWithPopup}><AiOutlineGoogle className='google-icons'/>Sign up with google</button>
            </div>
            <form className="form-container" onSubmit={submitForm}>
              <div className="input-container">{renderUsernameField()}</div>
              <div className="input-container">{renderPasswordField()}</div>
              <button type="submit" className="login-button-main">
                Sign In
              </button>
              {showSubmitError && <p className="error-message">*{errorMsg}</p>}
            </form>
            <p>Dont have an account? <span className='register-now'><button type="submit" className='register-now-button' onClick={loginWithPopup}>Register Now</button></span> </p>

            {/* <h3>User is {isAuthenticated ? "loggedin" : "not logged in"}</h3> */}
          </div>
        </div>
      </div>
    )
  )
}



export default LoginForm
