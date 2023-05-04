import { Link, useParams } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import dataBase from "./db";
import { useEffect, useState } from "react";

export default function Item() {
  const [favorite, setFavorite] = useState(false);
  const [seeDesc, setSeeDesc] = useState(false);
  const [product, setProduct] = useState([])
  const { item } =  useParams();
  useEffect(() => {
    setProduct([dataBase.find(elem => elem.name == item)])
  },[])
  const handleFavorite = () => setFavorite(favorite => !favorite);


  return(
    <section >
      <div className="flex flex-col  items-center justify-center text-orange-100 bg-zinc-900 pt-20 pb-20">
        <h3 className="text-4xl md:text-6xl mb-6">Product</h3>
        <span className="text-md md:text-xl"><Link>All</Link> / {item}</span>
      </div>
      <div className="grid-container p-12 pt-20 justify-center grid grid-cols-1 grid-rows-2">
      {product.map((item,index) => {
        const { img, n, name, price, type, stock, description } = item;
        return (
          <div className="flex flex-col grow items-start justify-center bg-zinc-300" key={index}>
            <div className="relative">
              <span className="absolute top-4 right-4 text-2xl" onClick={handleFavorite}>{favorite ? <AiFillHeart className="fill-red-900"/> : <AiOutlineHeart className="fill-red-900"/>}</span>
              <img  src={img}></img>
            </div>
            <h2 className="text-2xl pt-4 pb-4">{name}</h2>
            <p className="text-xl pb-4">Price: <span className="text-xl pl-4 text-orange-800">{price}.00 $</span></p>
            <p className="text-xl pb-4">Type: <span className="text-xl pl-4 text-zinc-900">{type}</span></p>
            <p className="text-xl pb-4">Availability: 
              <span className={`text-xl pl-4 ${stock > 0 ? ' text-green-700' : ' text-red-700'}` }>
                {stock > 0 ? 'In stock!' : 'Out of stock'}
              </span>
            </p>
            <p className="text-xl pb-4">Quantity: <span className="text-xl pl-4 text-zinc-900"></span></p>
            <button className="p-4 pl-8 pr-8 mb-4 text-xl bg-yellow-900 text-yellow-100">Add to Cart</button>
            <button className="p-4 pl-8 pr-8 mb-4 text-xl bg-yellow-900 text-yellow-100">Buy it now</button>
            <button className="p-4 pl-8 pr-8 mb-4 text-xl bg-yellow-900 text-yellow-100">Product description</button>
            <p>{description}</p>
          </div>
        )})
      }
      </div>
    </section>
  )
}