import { useState } from "react";

import { NavLink } from "react-router-dom"
import { BiMenuAltRight } from 'react-icons/bi'

export function CustomLink(props) {
  const { to, linkName} = props;
  return (
    <li className="md:ml-4 md:mb-0 mb-6 text-center">
      <NavLink 
        to={to}
        className={({isActive}) => {
          return isActive ? "text-lg lg:text-xl bg-orange-100 text-gray-800 p-2 inline-block rounded-md" 
          : 
          'transition ease-in-out 150ms text-lg lg:text-xl text-orange-100 rounded-md p-2 inline-block hover:bg-orange-100  hover:text-gray-800'
        }}
      >
        {linkName}
      </NavLink>
    </li>
  )
}

export function UserAuthLinks () {
  const [subMenu, setSubMenu] = useState(false);

  const handleSubMenu = () => setSubMenu(!subMenu);

  return (
  <li className="md:ml-4 text-center relative">
    <button className="p-2 hover:bg-orange-100 group rounded-md" onClick={handleSubMenu}>
      <BiMenuAltRight className="fill-orange-100 group-hover:fill-gray-800 w-8 h-auto"/>
    </button>
    <div className={`${!subMenu && 'hidden'} absolute right-full md:right-0 top-0 md:top-full w-40  bg-orange-900 after:content-[''] after:absolute after:-right-[13px] md:after:right-0 after:top-[18px] md:after:-top-[13px] after:-ml-[15px] after:-mt-[15px] after:w-0 after:z-[1] after:h-0 after:border-l-[15px]  after:border-l-orange-900 after:border-t-[15px]  after:border-t-transparent  after:border-b-[15px] after:border-b-transparent md:after:border-b-[15px] md:after:border-b-orange-900 md:after:border-l-[15px] md:after:border-l-transparent md:after:border-r-[15px] md:after:border-r-transparent`}>
      <NavLink to='/login' className="inline-block w-full text-start p-2">Log In</NavLink>
      <NavLink to='/register' className="inline-block w-full text-start p-2">Create Account</NavLink>
    </div>
  </li>
  )
}