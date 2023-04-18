import { Link } from "react-router-dom"
import { AiOutlineShoppingCart  } from 'react-icons/ai'
export default function Nav(props) {
  const {total} = props;
  return(
    <nav>
      <h1>CHOCOLAT</h1>
      <div className="nav-link-container">
      <Link to='/'>Home</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/cart' className="cart-link">
        <AiOutlineShoppingCart /> {total > 0 ? <span>{total}</span> : null}
      </Link>
      </div>
    </nav>
  )
}