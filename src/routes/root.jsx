import dataBase from "../components/db"
import { Link } from "react-router-dom"

export async function loader() {
  return dataBase
}

export function Root() {
  return(
    <div className="home">
      <h2>Taste good, does good</h2>
      <Link to='/shop'>To the Shop</Link>
    </div>
  )
}

