import { Link } from "react-router-dom"

export default function Header ({ section, item }) {
  return (
    <div className="flex flex-col  items-center justify-center text-orange-100 bg-zinc-900 pt-20 pb-20">
      <h3 className="text-4xl md:text-6xl mb-6">{section}</h3>
      <span className="text-md md:text-xl"><Link to={'/shop'}>All</Link> / {item}</span>
    </div>
  )
}