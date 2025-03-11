import { Route, Routes } from 'react-router-dom';
import Login from "../Pages/Login";
import Register from '../Pages/Regsiter/Register';

export default function routesPages() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
  )
}
