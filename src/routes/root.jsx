import dataBase from "../components/db"
import HeroSection from "../components/Hero";
import Gallery from "../components/Gallery";
import { Link } from "react-router-dom"

export async function loader() {
  return dataBase
}


export function Root() {
  return(
    <>
    <div className="home flex flex-col justify-center items-center bg-hero-pattern bg-center bg-cover bg-no-repeat h-screen">
      <h2 className="text-4xl md:text-6xl xl:text-8xl text-orange-100">Taste good, does good</h2>
      <Link className="text-4xl  text-orange-100" to='/shop'>To the Shop</Link>
    </div>
      <HeroSection />
      <Gallery />
    </>
  )
}

