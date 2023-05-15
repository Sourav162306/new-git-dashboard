import './index.css'

const User = props => {
  const {userData} = props
  const {name, username, email, address, phone, website, company} = userData

  return (
    <div className='user-container'>
        <p className="name">Name: {name}</p>
        <p className="username">Username: {username}</p>
        <p className="price">Email: {email}</p>
        {/* <p className="price">{address}</p> */}
        <p className="price">Phone: {phone}</p>
        <p className="price">Website Link: {website}</p>
        {/* <p className="price">{company}</p> */}
    </div>
  )
}
export default User