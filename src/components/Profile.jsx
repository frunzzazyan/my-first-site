import { useState } from 'react'
import './Profile.css'

let userName = (localStorage.getItem('user-name'))


const Profile = () => {
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(userName)))

  return (
    <>
        <div className="items-profile">
            <div className="btn-and-img">
                <div className="img">
                    <img src="#" alt="" />
                </div>
                <div className="link">
                    <ul>
                        <li>aaaaa</li>
                        <li>baaaa</li>
                        <li>caaaa</li>
                    </ul>
                </div>
            </div>
            <div className="info">
                 <h1>{user.fname}</h1>
                 <h2>{user.email}</h2>
            </div>

        </div>
    </>
  )
}

export default Profile