import dataBase from "./db"
import { Link } from "react-router-dom"
import Card from "./Card"

export default function Shop(props) {
  const {func} = props
  return (
    <div className="shop-section">
      <div className="flex flex-col  items-center justify-center text-orange-100 bg-zinc-900 pt-20 pb-20">
        <h2 className="text-4xl md:text-6xl mb-6">Collection</h2>
        <span className="text-md md:text-xl"><Link to={'/'}>Home</Link> / Products</span>
      </div>
      <div className="grid-container p-12 pt-20 gap-6 justify-center grid grid-cols-[minmax(200px,_400px)] grid-rows-[460px] md:grid-col-2 md:grid-rows-[460px,_460px] lg:grid-cols-4">
        {dataBase.map((item,index) => {
          const { n } = item;
          return <Card {...item} key={n} id={index} handleClick={func}/>
          })
        }
      </div>
    </div>
  )
}