import { Link } from "react-router-dom"
import dataBase from "./db"
import Card from "./Card"

export default function Shop(props) {
  const {func} = props
  return (
    <div>
      <h1>Welcome to Shop</h1>
      <Link to='/'>To Home</Link>
      <div className="grid-container">
        {dataBase.map((item,index) => {
          const { n } = item;
          return <Card {...item} key={n} id={index} handleClick={func}/>
          })
        }
      </div>
    </div>
  )
}