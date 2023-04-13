
export default function Cart(props) {
  const { list } = props
  return(
    <div>
      <h1>Welcome to the cart</h1>
      <div className="grid-container">
        {list.map((item, index) => {
          return <div className="card" key={index}><p>{item.name}</p></div>
        })}
      </div>
    </div>
  )
}