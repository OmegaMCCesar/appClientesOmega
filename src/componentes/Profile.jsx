import './Profile.css'


const Profile = ({user,isAuthenticated}) => {

  console.log(user);

  return (
     isAuthenticated &&(
      <div className='contenedor_profile'>
      <img className='img-user_profile' src={user.picture} alt="img-user" />
      <h2 className='data_profile'>Usuario: {user.name}</h2>
      <h2 className='data_profile'>Alias: {user.nickname}</h2>
      <h2 className='data_profile'>E-mail: {user.email}</h2>
     </div>
     )
  )
};

export default Profile;