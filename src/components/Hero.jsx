import heroImg from '../assets/images/home-img.jpg'

export default function HeroSection() {
  return(
    <div className="hero-section flex justify-center items-center my-8">
      <section className='px-10 max-w-lg lg:max-w-7xl'>
        <h2 className='text-4xl lg:text-6xl'>About us</h2>
        <p className='text-xl text-left'>
          Duis lacinia mauris ut sem suscipit cursus. Praesent tincidunt dolor eget pretium porttitor. 
          Nam malesuada ipsum quis ligula porttitor placerat. 
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
          Morbi maximus auctor commodo.
          Praesent rutrum purus ligula, fringilla dignissim eros pellentesque sit amet. 
          Integer vel odio rhoncus, dapibus felis ut, venenatis arcu. 
          Donec dapibus varius ligula et malesuada.
        </p>
      </section>
      <img className='invisible mr-8 rounded-lg w-0 2xl:visible 2xl:w-1/4' src={heroImg}></img>
    </div>
  )
}