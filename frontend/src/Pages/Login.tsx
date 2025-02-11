import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/register');
    }

  return (
    <div className='login'>
        <h1>Login</h1>
        <div className="register">
            <h2>Pas encore inscrit?</h2>
            <button onClick={handleClick} >Register</button>
        </div>
    </div>
  )
}
