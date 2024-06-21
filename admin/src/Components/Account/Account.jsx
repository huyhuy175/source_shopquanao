import { useEffect, useState } from 'react'
import './Account.css'
import cross_icon from '../../assets/cross_icon.png'

const Account = () => {

  const [allusers, setAllUsers] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allusers')
      .then((res) => res.json())
      .then((data) => { setAllUsers(data) });
  }

  useEffect(() => {
    fetchInfo();
  }, [])

  const remove_user = async (email) => {
    await fetch('http://localhost:4000/removeuser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email })
    })
    await fetchInfo();
  }


  return (
    <div className='list-user'>
      <h1>All Users List</h1>
      <div className="listuser-format-main">
        <p>Name</p>
        <p>Email</p>
        <p>Password</p>
        <p style={{ textAlign: 'center' }}>Remove</p>
      </div>
      <div className="listuser-allusers">
        <hr />
        {allusers.map((user, index) => {
          return <><div key={index} className='listuser-format-main listuser-format'>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <img onClick={() => { remove_user(user.email) }} src={cross_icon} alt="" className="listuser-remove-icon" />
          </div>
            <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default Account