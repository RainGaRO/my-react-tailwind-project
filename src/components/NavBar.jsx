import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">React</h1>

            <ul className="hidden md:flex">
                <li className="p-4">Главная</li>
                <li className="p-4">Компания</li>
                <li className="p-4">Ресурсы</li>
                <li className="p-4 whitespace-nowrap">О нас</li>
                <li className="p-4">Контакты</li>
            </ul>

            <div onClick={handleNav} className='block md:hidden z-50'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>

            <ul className={nav ? 'flex flex-col text-center fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-50 fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold text-[green] p-4">React</h1>
                <li className="p-4 border-b border-gray-600">Главная</li>
                <li className="p-4 border-b border-gray-600">Компания</li>
                <li className="p-4 border-b border-gray-600">Ресурсы</li>
                <li className="p-4 border-b border-gray-600">О нас</li>
                <li className="p-4 ">Контакты</li>
            </ul>
        </div>
    )
}

export default NavBar;