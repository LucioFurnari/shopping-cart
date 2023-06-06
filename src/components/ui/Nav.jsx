import { NavLink } from "react-router-dom"
import { CustomLink, UserAuthLinks, UserProfile } from "./CustomLink";
import { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineMenu } from 'react-icons/ai'
import { cartContext, userContext } from "../ShopContext";

export default function Nav(props) {
  // Get cart amount //
  const {cartAmount} = useContext(cartContext);
  // Get user state //
  const userState = useContext(userContext)

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
        {
        // Use user state to render the links or not //
        userState.isSigned &&
          <>
          <CustomLink to='/wishlist' linkName={<AiOutlineHeart className="w-8 h-auto"/>} />
          <li className="md:ml-4 text-center">
          <NavLink 
            to='/cart'
            className={({isActive}) => {
            return isActive ? "relative text-xl border-b-2 border-orange-300 text-orange-300 p-2 inline-block" 
            : 
            'relative transition ease-in-out 150ms text-xl text-gray-200 rounded-md p-2 inline-block   hover:text-orange-300'
            }}
          >
            <AiOutlineShoppingCart className=" w-8 h-auto"/> {cartAmount > 0 ? <span className="absolute top-0 right-0">{cartAmount}</span> : null}
          </NavLink>
          </li>
          </>
        }
        <UserAuthLinks />
        <UserProfile />
      </ul>
      <button className="md:hidden" onClick={handleMenu}>
        {!menu && <AiOutlineMenu aria-label="Menu" className="fill-orange-100 w-12 h-auto"/>}
      </button>
    </nav>
    {menu && <div onClick={handleMenu} className="z-[1] backdrop-blur-sm bg-white/30 fixed top-0 right-0  w-screen h-screen "></div>}
    </>
  )
}