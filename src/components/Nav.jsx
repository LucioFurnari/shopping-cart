import { Link } from "react-router-dom"
export default function Nav(props) {
  const {total} = props;
  return(
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/cart' >Cart {total > 0 ? total : null}</Link>
    </nav>
  )
}