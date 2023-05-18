import dataBase from "./db"
import Article from "./ui/Article";
import Gallery from "./ui/Gallery";
import { Link } from "react-router-dom"

export async function loader() {
  return dataBase
}


export function Home() {
  return(
    <>
    <div className="home flex flex-col justify-center items-center bg-[url('./assets/images/background.jpg')] bg-center bg-cover bg-no-repeat h-screen">
      <h2 className="text-4xl md:text-6xl xl:text-8xl text-white">Taste good, does good</h2>
      <Link className="text-xl font-semibold mt-6 p-4 rounded-md bg-yellow-800 active:bg-yellow-950 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-slate-100" to='/shop'>To the Shop</Link>
    </div>
      <Article />
      <Gallery />
    </>
  )
}

