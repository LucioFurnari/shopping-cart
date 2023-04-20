import { Link } from "react-router-dom"
import { AiOutlineShoppingCart  } from 'react-icons/ai'
export default function Nav(props) {
  const {total} = props;
  return(
    <nav>
      <h1>CHOCOLAT</h1>
      <ul className="nav-link-container">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/cart' className="cart-link">
        <AiOutlineShoppingCart /> {total > 0 ? <span>{total}</span> : null}
        </Link></li>
      </ul>
    </nav>
  )
}