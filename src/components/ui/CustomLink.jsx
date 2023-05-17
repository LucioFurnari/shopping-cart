import { NavLink } from "react-router-dom"

export default function CustomLink(props) {
  const { to, linkName} = props;
  return (
    <li className="md:ml-4 md:mb-0 mb-6 text-center">
      <NavLink 
        to={to}
        className={({isActive}) => {
          return isActive ? "text-lg bg-orange-100 text-gray-800 p-4 inline-block rounded-md" 
          : 
          'transition ease-in-out 150ms text-lg text-orange-100 rounded-md p-4 inline-block hover:bg-orange-100  hover:text-gray-800'
        }}
      >
        {linkName}
      </NavLink>
    </li>
  )
}