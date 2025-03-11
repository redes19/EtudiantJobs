import { useNavigate } from 'react-router-dom'
import { role } from '../../Domain/user.model';
import React, { useState } from 'react'
import { Register as RegisterUser } from '../../Services/User.Services';

export default function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        nom: '',
        prenom: '',
        email: '',
        password: '',
        role: role.CHERCHER
    });

    const handleClick = () => {
        navigate('/');
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            console.log("try register");
            await RegisterUser(data);
            setData({
                nom: '',
                prenom: '',
                email: '',
                password: '',
                role: role.CHERCHER
            })
            alert('Register success');
        } catch (error) {
            console.log(error);
            alert('Error register');
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='nom' placeholder='Name' value={data.nom} onChange={handleChange} required />
                <input type="text" name='prenom' placeholder='prenom' value={data.prenom} onChange={handleChange} required />
                <input type="text" name='email' placeholder='Email' value={data.email} onChange={handleChange} required />
                <input type="password" name='password' placeholder='Password' value={data.password} onChange={handleChange} required />

                <select name="role" value={data.role} onChange={handleChange}>
                    <option value={role.CHERCHER}>Chercher</option>
                    <option value={role.RECRUTEUR}>Propriétaire</option>
                </select>
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    )
}