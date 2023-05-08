import ItemCard from "./ItemCard";
import Header from "../ui/Header";
import dataBase from "../db";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Product({func}) {
  const [seeDesc, setSeeDesc] = useState(false);
  const [product, setProduct] = useState([]);
  const handleDescription = () => setSeeDesc(seeDesc => !seeDesc);

  // Use the param from the route to call the item from the dataBase //
  const { item } =  useParams();
  useEffect(() => setProduct([dataBase.find(elem => elem.name == item)]),[]);

  return(
    <section >
      <Header section='Product' link={'/shop'} routeName={'All'} item={item}/>
      <div className="grid-container p-12 pt-20 justify-center grid grid-cols-1 grid-rows-1">
      {
        product.map((item,index) => {
        const { img, n, name, price, type, stock, description } = item;
        return (
          <ItemCard 
          props={item} 
          key={index}
          handleDescription={handleDescription}
          seeDesc={seeDesc}
          handlePurchase={func}
          />
        )})
      }
      </div>
    </section>
  )
}