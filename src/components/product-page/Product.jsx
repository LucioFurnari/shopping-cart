import ItemCard from "./ItemCard";
import Header from "../ui/Header";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { db } from "../../Firebase";
import { collection, getDocs, getDoc, query, where } from "firebase/firestore";

export default function Product(props) {
  //const {dataBase} = props // Shop Data from the App state //
  const [product, setProduct] = useState([]);

  // Use the param from the route to call the item from the dataBase //
  const { item } =  useParams();

  // Shop database //
  const [shopData, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const newData = []
      const products = collection(db, 'products');
      
      // Create a query
      const q = query(products, where('name', '==', `${item}`))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => newData.push(doc.data()))
      console.log(newData)
      setData(newData)
    }
    getData()
  },[])

  // useEffect(() => setProduct([shopData.find(elem => elem.name == item)]),[]);

  return(
    <section >
      <Header section='Product' link={'/shop'} routeName={'All'} item={item}/>
      <div className="p-12 pt-20 justify-center grid grid-cols-1 grid-rows-1">
      {
        shopData.map((item,index) => {
        return (
          <ItemCard 
          {...item} 
          key={index}
          />
        )})
        }
      </div>
    </section>
  )
}