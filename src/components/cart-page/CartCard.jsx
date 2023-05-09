export default function CartCard(props) {
  const {name, price, quantity, img, index} = props;
  return (
    <div className=" bg-zinc-300" key={index}>
      <img src={img}></img>
      <p className="text-3xl pt-4">{name}</p>
      <p className="text-2xl pt-4">Price: {price} $</p>
      <p className="text-2xl pt-4">{quantity > 1 ? 'Amount: x' + quantity : null}</p>
      <button className="p-4 pl-8 pr-8 mb-4 text-xl bg-yellow-900 text-yellow-100" id={index} onClick={(ev) => handleDelete(ev, quantity)} >Remove item</button>
    </div>
  )
}