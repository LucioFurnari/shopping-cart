import { NavLink } from "react-router-dom"
import CustomLink from "./CustomLink";
import { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineMenu } from 'react-icons/ai'
import { cartContext } from "../ShopContext";

export default function Nav(props) {
  const {cartAmount} = useContext(cartContext);

  const [scroll, setScroll] = useState(false);

  const [menu, setMenu] = useState(false);

  const handleMenu = () => setMenu(!menu);

  useEffect(() => {
    const handleScroll = (ev) => {
      setScroll(window.pageYOffset > 200 ? true : false)
    };
  
    const handleResize = () => {
      if(window.innerWidth > 768) {
        setMenu(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
    window.addEventListener('resize',handleResize)
  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener('resize',handleResize)
  };
  },[]);

  return(
    <>
    <nav className= {`${scroll ? "bg-yellow-900 fixed w-full" : "bg-transparent w-full absolute " } transition-all duration-300 will-change-auto flex justify-around items-center z-10`}>
      <h1 className="text-orange-200 text-lg p-6">CHOCOLAT</h1>
      <ul className={`${menu && 'right-0'} fixed top-0 -right-full h-screen transition-[right] duration-300 pt-6 px-8 md:p-0 md:h-auto md:static md:flex md:items-center bg-yellow-900 md:bg-transparent`}>
        <CustomLink to='/' linkName='Home'/>
        <CustomLink to='/shop' linkName='Shop' />
        <CustomLink to='/wishlist' linkName={<AiOutlineHeart />} />
        <li className="md:ml-4 text-center">
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
      <button className="md:hidden" onClick={handleMenu}>
        {!menu && <AiOutlineMenu aria-label="Menu" className="fill-orange-100 w-12 h-auto"/>}
      </button>
    </nav>
    {menu && <div onClick={handleMenu} className="z-[1] backdrop-blur-sm bg-white/30 fixed top-0 right-0  w-screen h-screen "></div>}
    </>
  )
}