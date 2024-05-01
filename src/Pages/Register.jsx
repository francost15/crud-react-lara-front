import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { sendRequest } from "../functions";
import axios from "axios";
export const Register = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const go = useNavigate();
  const csrf = async() => {
    await axios.get('/sanctum/csrf-cookie');
  }
  const register = async(e)=> {
    e.preventDefault();
    await csrf();
    const form = {name:name,email: email, password: password};
    const res = await sendRequest('POST',form,'/api/auth/register','',false);
    if (res.status == true){
      go('/login');
    }
  }
  return (
    <div className="flex justify-center mt-4">
      <div className="max-w-md relative flex-col p-4 rounded-md text-black bg-white">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Bienvenido a <span className="text-[#7533ab]">Eventos App</span></div>
        <span className="text-lg font-normal mb-4 text-center text-[#1e0e4b]">Crea una cuenta</span>
          <form onSubmit={register} className="flex flex-col gap-3">
          <div className="block relative"> 
            <label className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faSmile} color="purple" className="mr-2"/>
              <input type="name"
                id="name" 
                placeholder="Ingresa tu nombre de usuario..." 
                value={name}
                autoFocus
                required
                onChange={(e) => setName(e.target.value)}
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-purple-500 outline-0"/>
            </div>
            </div>
            <div className="block relative"> 
            <label className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUser} color="purple" className="mr-2"/>
              <input type="email"
                id="email" 
                placeholder="correode@prueba.com" 
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-purple-500 outline-0"/>
            </div>
            </div>
            <div className="block relative"> 
            <label  className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faLock} color="purple" className="mr-2"/>
              <input type="password"
                id="password" 
                placeholder="Ingresa tu contraseña"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)} 
                className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-purple-500 outline-0"/>
            </div>  
            </div>
              <button type="submit" className="bg-[#7533ab] hover:bg-[#9d35f2] w-max m-auto px-10 py-2 rounded-lg text-white text-sm font-normal">Registrar</button>
          </form>
      <div className="text-sm text-center mt-[1.6rem]">Ya tienes una cuenta? <Link to='/login' className="text-md text-[#7533ab]">Ingresa!</Link></div>
    </div>
    </div>
    
  )
}
