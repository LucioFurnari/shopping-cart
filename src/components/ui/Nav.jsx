import { NavLink } from "react-router-dom"
import CustomLink from "./CustomLink";
import { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineHeart  } from 'react-icons/ai'
import { cartContext } from "../ShopContext";

export default function Nav(props) {
  const {cartAmount} = useContext(cartContext);

  const [scroll, setScroll] = useState(false);

  const handleScroll = (ev) => {
    setScroll(window.pageYOffset > 200 ? true : false)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  },[]);

  return(
    <nav className= {`${scroll ? "bg-yellow-900 fixed w-full" : "bg-transparent w-full absolute " }  transition-all duration-300 will-change-auto flex justify-around items-center z-10`} onScroll={handleScroll}>
      <h1 className="text-orange-200 text-lg">CHOCOLAT</h1>
      <ul className="nav-link-container flex items-center">
        <CustomLink to='/' linkName='Home'/>
        <CustomLink to='/shop' linkName='Shop' />
        <CustomLink to='/wishlist' linkName={<AiOutlineHeart />} />
        <li className="ml-4">
        <NavLink 
            to='/cart'
            className={({isActive}) => {
            return isActive ? "relative text-xl bg-orange-100 text-gray-800 p-4 inline-block rounded-md" 
            : 
            'relative transition ease-in-out 150ms text-xl text-orange-100 rounded-md p-4 inline-block hover:bg-orange-100  hover:text-gray-800'
            }}
        >
            <AiOutlineShoppingCart className="group-hover:fill-gray-800"/> {cartAmount > 0 ? <span className="absolute top-0 right-0">{cartAmount}</span> : null}
        </NavLink>
        </li>
      </ul>
    </nav>
  )
}