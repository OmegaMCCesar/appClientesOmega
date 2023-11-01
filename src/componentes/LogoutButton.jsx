import { useAuth0 } from "@auth0/auth0-react"
import './LoginButton.css'

const LogoutButton = () => {

  const {logout} = useAuth0();

  return (
    <button className="btn_login" onClick={() => logout()} >Logout</button>
  )
};

export default LogoutButton;