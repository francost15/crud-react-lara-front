import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import storage from '../Storage/storage';
import axios from "axios";
import './css/button.css';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const go = useNavigate();
  const logout = async() => {
    storage.remove('authToken');
    storage.remove('authUser');
    await axios.get('/api/auth/logout'.storage.get('authToken'));
    go('/login');
  }
  const authUser = storage.get('authUser');
  const userName = authUser ? authUser.name : '';
  return (
    <nav className="lg:px-16 px-6 bg-white shadow-md flex flex-wrap items-center lg:py-0 py-2">
    <div className="flex-1 flex justify-between items-center">
      <Link href="/" className="flex text-lg font-semibold">
        <img
          src="src/assets/logoengi.png"
          width="50"
          height="50"
          className="p-2"
          alt="LogoEventos"
        />
        <div className="mt-3 text-dark">Eventos</div>
      </Link>
    </div>
    <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block" onClick={() => setIsOpen(!isOpen)}>
    <svg
  className="fill-current text-purple-600"
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  viewBox="0 0 20 20"
>
  <title>menu</title>
  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
</svg>
</label>
<input className="hidden" type="checkbox" id="menu-toggle" />
{storage.get('authUser') ? (
      <div className={`lg:flex ${isOpen ? 'flex' : 'hidden'} lg:items-center lg:w-auto w-full`} id="menu">
      <nav>
        <ul className="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
          <li className="py-2 lg:py-0 ">
            <span className="text-dark hover:pb-4 hover:border-b-4 hover:border-purple-600">
              Bienvenido,{userName}
            </span>
          </li>
          <li className="py-2 lg:py-0 ">
            <Link to='/' className="text-dark hover:pb-4 hover:border-b-4 hover:border-purple-600">
              Ciudades
            </Link>
          </li>
          <li className="py-2 lg:py-0 ">
            <Link to='/eventos'className="text-dark hover:pb-4 hover:border-b-4 hover:border-purple-600">
              Eventos
            </Link>
          </li>
              <li className="py-2 lg:py-0 ">
                <button className="Btn" onClick={logout}>
                  <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
                  <div className="text">Logout</div>
                </button>
              </li>
            </ul>
          </nav>
        </div>
    ): 
    <div className={`lg:flex ${isOpen ? 'flex' : 'hidden'} lg:items-center lg:w-auto w-full`} id="menu">
    <nav>
    </nav>
  </div>
    
    }

  </nav>
  )
}