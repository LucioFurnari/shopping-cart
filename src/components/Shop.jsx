import { Link } from "react-router-dom"
import Nav from "./Nav"
export default function Shop() {
  return (
    <div>
      <Nav />
      <h1>Welcome to shop</h1>
      <Link to='/'>To Home</Link>
    </div>
  )
}