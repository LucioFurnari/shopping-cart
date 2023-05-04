import { Link, useParams } from "react-router-dom";
import Card from "./Card";
import dataBase from "./db";
import { useEffect, useState } from "react";

export default function Item() {
  const [product, setProduct] = useState([])
  const { item } =  useParams();
  useEffect(() => {
    setProduct([dataBase.find(elem => elem.name == item)])
  },[])
  console.log(product)
  return(
    <section >
      <div className="flex flex-col  items-center justify-center text-orange-100 bg-zinc-900 pt-20 pb-20">
        <h3 className="text-4xl md:text-6xl mb-6">Product</h3>
        <span className="text-md md:text-xl"><Link>All</Link> / {item}</span>
      </div>
      <div className="grid-container p-12 pt-20 justify-center grid grid-cols-1 grid-rows-2">
      {product.map((item,index) => {
        const { img, n, name, price } = item;
        return (
          <div className="flex flex-col grow items-center justify-center bg-zinc-300" key={index}>
            <img src={img}></img>
            <h2>{name}</h2>
            <p>{price}</p>
          </div>
        )})
      }
      </div>
    </section>
  )
}