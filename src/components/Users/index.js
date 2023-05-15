import { useEffect, useState } from "react"

import Header from '../Header'
import Footer from '../Footer'
import User from '../User'

import './index.css'

const Users = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsers(data));

    useEffect(() => {
      fetchUserData()
    }, [])

  return(
  <>
    <Header pageTitle='Users' />
    <div className="main-product-sections">
      <div className='product-container'>
        {/* <p>Hello Users</p> */}
        <div className="user-main-container">
            {users.map(user => (
              <User userData={user} key={user.id} />
            ))}
        </div>
        <Footer/>
      </div>
    </div>
  </>
  )
  }

export default Users