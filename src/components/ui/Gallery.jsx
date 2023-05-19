import img_1 from '../../assets/images/gallery-img-1.jpg'
import img_2 from '../../assets/images/gallery-img-2.jpg'
import img_3 from '../../assets/images/gallery-img-3.jpg'
import img_4 from '../../assets/images/gallery-img-4.jpg'
import img_5 from '../../assets/images/gallery-img-5.jpg'
export default function Gallery() {
  return (
  <article className='gallery-section bg-zinc-900'>
    <h2 className='text-4xl xl:text-6xl ml-20 text-zinc-100'>Cakes & Sweets</h2>
    <div className="gallery-grid p-20 group grid gap-12 grid-cols-1 justify-items-center items-center md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2">
      <img className='w-full h-full' src={img_1} alt='Cacao'></img>
      <img className='w-full h-full' src={img_2} alt='Chocolate-Brownie'></img>
      <img className='w-full h-full' src={img_5} alt='Chocolate-Cupcake'></img>
      <img className='w-full h-full xl:col-span-2' alt='Cake' src={img_4}></img>
      <img className='w-full h-full' src={img_3} alt='Chocolate-Cake'></img>
    </div>
  </article>
  )
}