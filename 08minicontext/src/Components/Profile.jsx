import { useContext } from "react"
import UserContext from '../Context/UserContext'

function Profile() {
    const {User} = useContext(UserContextr)
   if(!User) return <div>please Login</div>
        
   return <div>Welcome {User.username}</div>
    
}

export default Profile
