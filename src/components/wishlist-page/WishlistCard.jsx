import { useContext } from "react";
import { Link } from "react-router-dom";

export default function WishlistCard(props) {
  const {name, price, img, id} = props;


  return (
    <div className="bg-zinc-300 flex flex-col items-center xl:flex-row xl:max-w-7xl">
      <div className="bg-zinc-300 flex flex-col items-center xl:flex-row xl:max-w-7xl">
      <img src={img}></img>
      <div className="xl:ml-8">
        <p className="text-3xl pt-4">{name}</p>
        <p className="text-2xl pt-4">Price: {price}.00 $</p>
        <Link className=" bg-yellow-900 hover:bg-yellow-950 text-white p-4 rounded-lg mt-6 inline-block" to={`/shop/${name}`}>
        To the product
        </Link>
      </div>
      </div>
    </div>
  )
}