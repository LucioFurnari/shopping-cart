import ItemCard from "./ItemCard";
import dataBase from "../db";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Item() {
  const [favorite, setFavorite] = useState(false);
  const [seeDesc, setSeeDesc] = useState(false);
  const [product, setProduct] = useState([])
  const { item } =  useParams();
  useEffect(() => setProduct([dataBase.find(elem => elem.name == item)]),[])
  const handleFavorite = () => setFavorite(favorite => !favorite);
  const handleDescription = () => setSeeDesc(seeDesc => !seeDesc);

  return(
    <section >
      <div className="flex flex-col  items-center justify-center text-orange-100 bg-zinc-900 pt-20 pb-20">
        <h3 className="text-4xl md:text-6xl mb-6">Product</h3>
        <span className="text-md md:text-xl"><Link>All</Link> / {item}</span>
      </div>
      <div className="grid-container p-12 pt-20 justify-center grid grid-cols-1 grid-rows-1">
      {product.map((item,index) => {
        const { img, n, name, price, type, stock, description } = item;
        return (
          <ItemCard 
          props={item} 
          key={index}
          handleFavorite={handleFavorite} 
          handleDescription={handleDescription}
          favorite={favorite}
          seeDesc={seeDesc}
          />
        )})
      }
      </div>
    </section>
  )
}