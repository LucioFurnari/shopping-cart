import { Link } from "react-router-dom"

export default function Header (props) {
  const { section, link, routeName, item } = props
  return (
    <div className="flex flex-col  items-center justify-center text-orange-100 bg-zinc-900 pt-20 pb-20">
      <h3 className="text-4xl md:text-6xl mb-6">{section}</h3>
      <span className="text-md md:text-xl"><Link to={link}>{routeName}</Link> / {item}</span>
    </div>
  )
}