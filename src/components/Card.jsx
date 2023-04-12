export default function Card(props) {
  const { name, price } = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  )
}