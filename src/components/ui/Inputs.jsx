export function SignUpInput(props) {
  const { name, type, placeholder, labelText, id } = props;
  return(
  <>
  <label className="pl-5 text-xl" htmlFor={id}>{labelText}</label>
  <input className="px-5 py-2 text-xl focus:outline-black focus:outline focus:outline-1" id={id} type={type} placeholder={placeholder} name={name}></input>
  </>
  )
}