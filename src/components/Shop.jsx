import { Link } from "react-router-dom"
import dataBase from "./db"
import Nav from "./Nav"
import Card from "./Card"
export default function Shop() {
  return (
    <div>
      <Nav />
      <h1>Welcome to Shop</h1>
      <Link to='/'>To Home</Link>
      {dataBase.map((item,index) => {
        const { n } = item;
        return <Card {...item} key={n}/>
      })}
    </div>
  )
}