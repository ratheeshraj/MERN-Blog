import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import user from '../../components/topbar/user.jpg'
export default function Settings() {
  return (
    <div className='settings'>
     <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your Account</span>
            <span className="settingsDeleteAccount">Delete Account</span>
        </div>
        <form className='settingsForm'>
            <label>Profile Picture</label>
            <div className="settingsPP">

                <img src={user} alt=''/>
                <label htmlFor='fileInput'>
                <i className="settingsPPIcon fa-solid fa-user"></i>
                <input type="file" id='fileInput' style={{display:'none'}}/>
                </label>
            </div>
            <label>Username</label>
            <input type='text' placeholder='Ratheesh'/>
            <label>Email</label>
            <input type='email' placeholder='raaj@email.com'/>
    
            <label>Password</label>
            <input type='password'/>
            <button className='settingsSubmit'>Update</button>
        </form>
     </div>
     <Sidebar/>
    </div>
  )
}
