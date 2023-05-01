import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'
import { CiTwitter } from 'react-icons/ci'
export default function Footer() {
  return(
    <footer className='flex items-center justify-around py-4 bg-yellow-900'>
      <p className='text-zinc-100'>© 2023 Chocolat</p>
      <ul className='flex '>
        <li><a className=' ml-6'><AiOutlineInstagram className=' fill-zinc-100'/></a></li>
        <li><a className=' ml-6'><CiTwitter className='fill-zinc-100'/></a></li>
        <li><a className=' ml-6'><AiOutlineFacebook className='fill-zinc-100'/></a></li>
      </ul>
    </footer>
  )
}