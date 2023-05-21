import Card from "./Card"
import Header from "../ui/Header"
import SkeletonCard from "./SkeletonCard";
import { shopContext, shopDispatchContext } from "../ShopContext";
import { FilterSection } from "./FilterSection";
import { useState, useEffect, useContext } from "react";
import { db } from "../../Firebase";
import { collection, getDocs, getDoc } from "firebase/firestore";

export default function Shop(props) {
  // const {dataBase} = props
  // Shop context //
  const shopList = useContext(shopContext);

  // Shop dispatch // 
  const shopDispatch = useContext(shopDispatchContext);

  //Save Shop database //
  const [shopData, setData] = useState([])

  // Loading state //
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const newData = []
      setLoading(true)
      const data = await getDocs(collection(db, 'products'));
      data.forEach((doc) => newData.push(doc.data()))
      // setData(newData)
      return newData
    }
    getData()
    .then(data => {
      shopDispatch({
        type:'CREATE-SHOP-LIST',
        data,
      })
      setLoading(false)
    })
  },[])

  return (
    <main className="min-h-screen">
      <Header section='Collection' link='/' routeName='Home' item='Products'/>
      <FilterSection />
      <div className="p-12 pt-20 gap-6 justify-center items-center grid grid-cols-1 md:grid-col-2  lg:grid-cols-4 lg:grid-rows-2">
        {loading ? 
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
        :
        shopList.map((item,index) => {
          const { id } = item;
          return <Card {...item} key={id} id={index} />
          })
        
      }
      </div>
    </main>
  )
}