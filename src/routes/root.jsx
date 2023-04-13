import Nav from "../components/Nav"
import { Outlet } from "react-router-dom"
import dataBase from "../components/db"

export async function loader() {
  return dataBase
}

export function Root() {
  return(
    <div>
      <Nav />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  )
}

