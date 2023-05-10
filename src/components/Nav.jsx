import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineHeart  } from 'react-icons/ai'
import { cartContext } from "./ShopContext";

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
        <li className="ml-4 text-zinc-100"><Link className="transition ease-in-out 150ms bg  p-4 inline-block hover:bg-orange-100  hover:text-gray-800 text-lg rounded-md"  to='/'>Home</Link></li>
        <li className="ml-4 text-zinc-100"><Link className="transition ease-in-out 150ms bg p-4 inline-block hover:bg-orange-100  hover:text-gray-800 text-lg  rounded-md"  to='/shop'>Shop</Link></li>
        <li className="ml-4 text-zinc-100"><Link to={'/wishlist'}><AiOutlineHeart></AiOutlineHeart></Link></li>
        <li className="ml-4 text-zinc-100">
          <Link className="group transition ease-in-out 150ms bg p-5 inline-block hover:bg-orange-100 cart-link text-lg relative" to='/cart'>
            <AiOutlineShoppingCart className="group-hover:fill-gray-800"/> {cartAmount > 0 ? <span className="absolute top-0 right-0">{cartAmount}</span> : null}
          </Link>
        </li>
      </ul>
    </nav>
  )
}