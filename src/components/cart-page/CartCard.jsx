export default function CartCard(props) {
  const {name, price, quantity, img, index} = props;
  return (
    <div className="card" key={index}>
      <img src={img}></img>
      <p>{name}</p>
      <p>Price: {price} $</p>
      <p>{quantity > 1 ? 'x' + quantity : null}</p>
      <button id={index} onClick={(ev) => handleDelete(ev, quantity)} className='cart-delete-btn'>X</button>
    </div>
  )
}