import { useNavigate } from 'react-router-dom'

export default function Register() {

    // faire une redirection vers Login après réussite de l'inscription
    const navigate = useNavigate();

    const hanldeClick = () => {
        navigate('/');
    }

  return (
    <div className="register">
        <h1>Register</h1>
    </div>
  )
}
