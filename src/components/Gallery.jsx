import img_1 from '../assets/images/gallery-img-1.jpg'
import img_2 from '../assets/images/gallery-img-2.jpg'
import img_3 from '../assets/images/gallery-img-3.jpg'
import img_4 from '../assets/images/gallery-img-4.jpg'
import img_5 from '../assets/images/gallery-img-5.jpg'
export default function Gallery() {
  return (
  <div className='gallery-section' >
    <h2>Cakes & Sweets</h2>
    <div className="gallery-grid group grid gap-8 grid-cols-1 justify-items-center items-center md:grid-cols-2 xl:grid-cols-3">
      <div className='img_1'><img src={img_1}></img></div>
      <div className='img_2'><img src={img_2}></img></div>
      <div className='img_3'><img src={img_3}></img></div>
      <div className='img_4 xl:col-span-2'><img src={img_4}></img></div>
      <div className='img_5'><img src={img_5}></img></div>
    </div>
  </div>
  )
}