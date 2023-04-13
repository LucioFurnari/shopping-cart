export default function Card(props) {
  const { name, price, id , handleClick} = props;
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{price}</p>
      <button id={id} onClick={handleClick}>Buy</button>
    </div>
  )
}