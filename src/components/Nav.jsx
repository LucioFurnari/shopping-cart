import { Link } from "react-router-dom"
import { AiOutlineShoppingCart  } from 'react-icons/ai'
export default function Nav(props) {
  const {total} = props;
  return(
    <nav className="flex justify-around items-center bg-yellow-900">
      <h1 className="text-zinc-100 text-lg">CHOCOLAT</h1>
      <ul className="nav-link-container flex items-center">
        <li className="ml-4 text-zinc-100"><Link className="transition ease-in-out 150ms bg  p-4 inline-block hover:bg-orange-100  hover:text-gray-800 text-lg"  to='/'>Home</Link></li>
        <li className="ml-4 text-zinc-100"><Link className="transition ease-in-out 150ms bg p-4 inline-block hover:bg-orange-100  hover:text-gray-800 text-lg" to='/shop'>Shop</Link></li>
        <li className="ml-4 text-zinc-100">
          <Link className="group transition ease-in-out 150ms bg p-6 inline-block hover:bg-orange-100 cart-link text-lg" to='/cart'>
            <AiOutlineShoppingCart className="group-hover:fill-gray-800"/> {total > 0 ? <span>{total}</span> : null}
          </Link>
        </li>
      </ul>
    </nav>
  )
}