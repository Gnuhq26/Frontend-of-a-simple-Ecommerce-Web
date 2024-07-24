// import { useState, useEffect } from 'react';
import Logo from '../../assets/logo.png';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
import DarkMode from './DarkMode';
import { IoLogInOutline } from "react-icons/io5";
import { Link } from "react-router-dom"; 

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = () => {

  // const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  //   window.addEventListener('resize', showButton);
  //   return () => {
  //     window.removeEventListener('resize', showButton);
  //   };
  // }, []);

  return (
  <div className='shadow-md bg-white 
  dark:bg-gray-800 dark:text-white duration-200
  relative z-40'>
    {/* { upper Navbar} */}
    <div className='bg-primary/40 py-2'>
      <div className='container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-w-7xl flex justify-between items-center'>
        <div>
        <Link to="/"
          className='font-bold text-2xl sm:text-3xl flex gap-3'>
          <img src={Logo} alt="Logo" 
            className="w-10"/>
            Shopsy
        </Link>
        </div>
        {/* searh bar  */}
        <div className='flex justify-between items-center gap-2'>
          <div className='relative group hidden sm:block'>
            <input 
              type="text"
              placeholder='search'
              className='w-[200px] sm:w-[200px]
              group-hover:w-[300px] transition-all
              duration-300 rounded-full border
              border-gray-300 px-2 py-1
              focus:outline-none focus:border-1
              focus:border-primary 
              dark:border-gray-500
              dark:bg-gray-800'
            />
            <IoMdSearch
            className='text-gray-500 
            group-hover:text-primary absolute
            top-1/2 -translate-y-1/2 right-3' />
          </div>
        {/* order button */}
        <button
          onClick={() => alert("Ordering not available yet")}
          className='bg-gradient-to-r from-primary
          to-secondary transition-all duration-200
          text-white py-1 px-4 rounded-full flex
          items-center gap-3 group'
        >
          <span className='group-hover:block
          hidden transition-all duration-200'>
            Order
          </span>
          <FaCartShopping className='text-xl
            text-white drop-shadow-sm
            cursor-pointer'/>
        </button>

        {/* Login button */}
        <button
          onClick={() => alert("Login functionality not implemented yet")}
          className='bg-gradient-to-r from-primary
          to-secondary transition-all duration-200
          text-white py-1 px-4 rounded-full flex
          items-center gap-3 group ml-2'
        >
          <span className='group-hover:block
          hidden transition-all duration-200'>
            Login
          </span>
          <IoLogInOutline className='text-xl
            text-white drop-shadow-sm
            cursor-pointer'/>
        </button>

        {/* DarkMode switch*/}
        <div>
          <DarkMode />
        </div>
      </div>
    </div>
    </div>
    {/* lower Navbar */}
    <div className='flex justify-center'>
      <ul className='sm:flex hidden items-center gap-4'>
        {Menu.map((data,id) => (
          <li key={id}>
            <a 
              href={data.link}
              className='inline-block px-4
              hover:text-primary duration-200'
            >
              {data.name}
            </a>
          </li>
        ))}
        {/* Simple Dropdown and Links */}
        <li className='group relative
        cursor-pointer'>
          <a 
            href="#"
            className='flex items-center
            gap-[2px] py-2'
            >
            Trending
            <span>
              <FaCaretDown
              className='transition-all
              duration-200
              group-hover:rotate-180'/>
            </span>
          </a>
          <div className='absolute z-[9999] hidden
          group-hover:block w-[150px] rounded-md
          bg-white p-2 text-black  shadow-md' >
            <ul>
              {DropdownLinks.map((data) => (
                <li key={data.id}>
                  <a href={data.link}
                  className='inline-block w-full
                  rounded-md p-2
                  hover:bg-primary/20'
                  >{data.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>

  );
}

export default Navbar
