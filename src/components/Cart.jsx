export default function Cart(props) {
  const { list, total } = props
  return(
    <div>
      <h1>Welcome to the cart</h1>
      <div className="grid-container">
        {list.map((item, index) => {
        const {name, price, quantity} = item;
          return (
          <div className="card" key={index}>
            <p>{name}</p>
            <p>{price} $</p>
            <p>{quantity > 1 ? 'x'+quantity : null}</p>
          </div>
          )
        })}
      </div>
      <div>
        <p>Total price: {total}</p>
      </div>
    </div>
  )
}