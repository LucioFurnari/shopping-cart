import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { useContext, useState } from "react";
import { WishlistDispatchContext, cartDispatchContext } from "../ShopContext";


// Database from firebase //
import { db } from "../../Firebase";
import { collection, query, getDocs, where } from "firebase/firestore";


// Get data from the data base from firebase //
const getData = async (name) => {
  const newData = []
  const products = collection(db, 'products');
  
  // Create a query
  const q = query(products, where('name', '==', `${name}`))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => newData.push(doc.data()))

  return newData;
}


export default function ItemCard (props) {
  const { img, id, name, price, type, stock, description} = props;
  const [favorite, setFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [seeDesc, setSeeDesc] = useState(false);
  const dispatch = useContext(WishlistDispatchContext)
  const cartDispatch = useContext(cartDispatchContext)
  const handleFavorite = () => setFavorite(favorite => !favorite);
  const handleDescription = () => setSeeDesc(seeDesc => !seeDesc);

  function handleWishlist(ev) {
    ev.stopPropagation()
    handleFavorite()
    getData(name) // Use getdata //
    .then(data => {
      dispatch({
        type: 'added',
        data,
        id: id,
      });
    })
    
  }
  function handleRemoveList(ev) {
    ev.stopPropagation()
    handleFavorite()
      dispatch({
        type: 'remove',
        id: id,
      })
    }
  
  function handleAddCart(ev, quantity) {
    getData(name)
    .then(item => {
      cartDispatch({
        type: 'ADD-TO-CART',
        id: id,
        quantity,
        data: item,
        name: name
      })
    })
  }

  return (
    <div className="flex flex-col grow items-start justify-center bg-zinc-300 lg:flex-row lg:items-center lg:justify-start lg: max-w-7xl">
      <div className="relative">
        <span className="absolute top-4 right-4 text-2xl">{favorite ? <AiFillHeart className="fill-red-900 animate-pulse"/> : <AiOutlineHeart onClick={handleWishlist} className="fill-red-900"/>}</span>
        <img  src={img}></img>
      </div>
      {
        // This is a placeholder, remember to change it //
        /* <button onClick={handleRemoveList}>Remove favorite</button> */
      }
      <div className=" flex-col ml-12">
        <h2 className="text-2xl font-semibold pt-4 pb-4">{name}</h2>
        <p className="text-xl pb-6">Price: <span className="text-xl pl-4 text-orange-800">{price}.00 $</span></p>
        <p className="text-xl pb-6">Type: <span className="text-xl pl-4 text-zinc-900">{type}</span></p>
        <p className="text-xl pb-6">Availability: 
          <span className={`text-xl pl-4 ${stock > 0 ? ' text-green-700' : ' text-red-700'}` }>
            {stock > 0 ? 'In stock!' : 'Out of stock'}
          </span>
        </p>
        <p className="text-xl pb-6">Quantity: <span className="text-xl pl-4 text-zinc-900"></span></p>
        <button className="ml-4 p-4 pl-8 pr-8 mb-4 text-xl bg-yellow-900 text-yellow-100"
          onClick={(ev) => {
            handleAddCart(ev, quantity)
            // handlePurchase(ev,quantity)
            setQuantity(1)
            }}>
          Add to Cart
        </button>
        <button className="ml-4 p-4 pl-8 pr-8 mb-4 text-xl bg-yellow-900 text-yellow-100">Buy it now</button>
        <button className={`${seeDesc &&"bg-yellow-700"} ml-4 p-4 pl-8 pr-8 mb-4 text-xl bg-yellow-900 text-yellow-100 `} onClick={handleDescription}>Product description</button>
        <p className={`${seeDesc && " h-[200px]"} overflow-hidden transition-[height] duration-1000 ease-in-out h-0`}>{description }</p>
      </div>
    </div>
  )
}