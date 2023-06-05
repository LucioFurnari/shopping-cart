import { useState, useContext } from "react";

import { NavLink } from "react-router-dom"
import { AiOutlineUser } from 'react-icons/ai'
import { BiMenuAltRight } from 'react-icons/bi'

import { userDispatchContext, userContext } from "../ShopContext";
import { handleSignOut } from "../../AuthenticationFunctions";

export function CustomLink(props) {
  const { to, linkName} = props;
  return (
    <li className="md:ml-4 md:mb-0 mb-6 text-center">
      <NavLink 
        to={to}
        className={({isActive}) => {
          return isActive ? "text-lg lg:text-xl border-b-2 border-orange-300 text-orange-300 p-2 inline-block" 
          : 
          'transition ease-in-out 150ms text-lg lg:text-xl text-gray-200 rounded-md p-2 inline-block  hover:text-orange-300'
        }}
      >
        {linkName}
      </NavLink>
    </li>
  )
}

export function UserAuthLinks() {
  const [subMenu, setSubMenu] = useState(false);
  // User state //
  const userInfo = useContext(userContext)

  const handleSubMenu = () => setSubMenu(!subMenu);

  return (
  <li className="md:ml-4 text-center relative">
    <button className="p-2 group" onClick={handleSubMenu}>
      <BiMenuAltRight className="fill-orange-100 group-hover:fill-orange-300 w-8 h-auto"/>
    </button>
    <div className={`${!subMenu && 'hidden'} absolute right-full md:right-0 top-0 md:top-16 w-40  bg-orange-100 after:content-[''] after:absolute after:-right-[13px] md:after:right-0 after:top-[18px] md:after:-top-[13px] after:-ml-[15px] after:-mt-[15px] after:w-0 after:z-[1] after:h-0 after:border-l-[15px]  after:border-l-orange-100 after:border-t-[15px]  after:border-t-transparent  after:border-b-[15px] after:border-b-transparent md:after:border-b-[15px] md:after:border-b-orange-100 md:after:border-l-[15px] md:after:border-l-transparent md:after:border-r-[15px] md:after:border-r-transparent`}>
      {!userInfo.isSigned && <NavLink to='/login' className="inline-block w-full text-start p-2 transition-[color] hover:text-zinc-400">Log In</NavLink>}
      <NavLink to='/sign-up' className="inline-block w-full text-start p-2 transition-[color] hover:text-zinc-400">Create Account</NavLink>
    </div>
  </li>
  )
}

export function UserProfile() {
  const userDispatch = useContext(userDispatchContext)
  // User state //
  const userInfo = useContext(userContext)

  return(
    <li className="md:ml-4 md:mb-0 mb-6 text-center flex md:flex-row flex-col items-center">
      {userInfo.isSigned && 
      <>
      <AiOutlineUser className="fill-orange-100 md:inline-block w-8 h-auto"/>
      <span className="text-orange-100">{userInfo.firstName + userInfo.lastName}</span>
      <button onClick={() => handleSignOut(userDispatch)} className=" text-orange-100 hover:text-orange-300 text-lg lg:text-xl md:ml-4 md:mb-0 mb-6 text-center">Sign Out</button>
      </>
      }
    </li>
  )
}