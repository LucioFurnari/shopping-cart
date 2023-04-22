import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'
import { CiTwitter } from 'react-icons/ci'
export default function Footer() {
  return(
    <footer>
      <p>© 2023 Chocolat</p>
      <ul>
        <li><a><AiOutlineInstagram /></a></li>
        <li><a><CiTwitter /></a></li>
        <li><a><AiOutlineFacebook /></a></li>
      </ul>
    </footer>
  )
}