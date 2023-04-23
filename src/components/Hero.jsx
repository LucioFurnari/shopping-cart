import heroImg from '../assets/images/home-img.jpg'

export default function HeroSection() {
  return(
    <div className="hero-section">
      <section>
        <h2>About us</h2>
        <p>
          Duis lacinia mauris ut sem suscipit cursus. Praesent tincidunt dolor eget pretium porttitor. 
          Nam malesuada ipsum quis ligula porttitor placerat. 
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
          Morbi maximus auctor commodo.
          Praesent rutrum purus ligula, fringilla dignissim eros pellentesque sit amet. 
          Integer vel odio rhoncus, dapibus felis ut, venenatis arcu. 
          Donec dapibus varius ligula et malesuada.
        </p>
      </section>
      <img src={heroImg}></img>
    </div>
  )
}