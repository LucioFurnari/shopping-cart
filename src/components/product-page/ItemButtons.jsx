export default function ItemButton(props) {
  const { text, func=() =>{} } = props;
  return (
    <button onClick={func} className="ml-4 mb-4 p-3 md:py-4 md:px-8  text-xl bg-yellow-900 text-yellow-100">
      {text}
    </button>
  )
}