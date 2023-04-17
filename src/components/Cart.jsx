export default function Cart(props) {
  const { list, total, handleDelete, handlePurchase } = props
  return(
    <div>
      <h1>Welcome to the cart</h1>
      <div className="grid-container">
        {list.map((item, index) => {
        const {name, price, quantity, img} = item;
          return (
          <div className="card" key={index}>
            <p>{name}</p>
            <p>{price} $</p>
            <img src={img}></img>
            <p>{quantity > 1 ? 'x' + quantity : null}</p>
            <button id={index} onClick={(ev) => handleDelete(ev, quantity)}>X</button>
          </div>
          )
        })}
      </div>
      <div>
        <p>Total price: {total}</p>
        <button onClick={handlePurchase}>Purchase</button>
      </div>
    </div>
  )
}