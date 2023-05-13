import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'
import { CiTwitter } from 'react-icons/ci'
export default function Footer() {
  return(
    <footer className='flex items-center justify-around py-4 bg-yellow-900'>
      <p className='text-zinc-100'>© 2023 Chocolat</p>
      <ul className='flex '>
        <li className=' ml-6'><a alt='Instagram'><AiOutlineInstagram alt='Instagram' className=' fill-zinc-100'/></a></li>
        <li className=' ml-6'><a alt='Twitter'><CiTwitter alt='Twitter' className='fill-zinc-100'/></a></li>
        <li className=' ml-6'><a alt='Facebook'><AiOutlineFacebook alt='Facebook' className='fill-zinc-100'/></a></li>
      </ul>
    </footer>
  )
}