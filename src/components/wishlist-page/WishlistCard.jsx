export default function WishlistCard(props) {
  const {name, price, handlePurchase, handleCart, handleRemove} = props;
  console.log(props)
  return (
    <div>
      <img></img>
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Buy it now</button>
      <button>Add to the cart</button>
      <button>Remove</button>
    </div>
  )
}