import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

export default function ItemCard ({props, index, handleFavorite,  handleDescription, favorite, seeDesc}) {
  const { img, n, name, price, type, stock, description } = props;

  return (
    <div className="flex flex-col grow items-start justify-center bg-zinc-300">
            <div className="relative">
              <span className="absolute top-4 right-4 text-2xl" onClick={handleFavorite}>{favorite ? <AiFillHeart className="fill-red-900 animate-pulse"/> : <AiOutlineHeart className="fill-red-900"/>}</span>
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
            <button className={`${seeDesc &&"bg-yellow-700"} p-4 pl-8 pr-8 mb-4 text-xl bg-yellow-900 text-yellow-100 `} onClick={handleDescription}>Product description</button>
            <p className={`${seeDesc && " h-[200px]"} overflow-hidden transition-[height] duration-1000 ease-in-out h-0`}>{description }</p>
          </div>
  )
}