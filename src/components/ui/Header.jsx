import { Link } from "react-router-dom"

export default function Header (props) {
  const { section, link, routeName, item } = props
  return (
    <header className="flex flex-col  items-center justify-center text-orange-100 bg-zinc-900 pt-20 pb-20">
      <h3 className="text-5xl md:text-6xl mb-6">{section}</h3>
      <span className="text-lg md:text-xl"><Link to={link}>{routeName}</Link> / {item}</span>
    </header>
  )
}