export function SignUpInput(props) {
  const { name, type, placeholder, labelText, id, func } = props;
  return(
  <>
  <label className="pl-5 text-xl" htmlFor={id}>{labelText}</label>
  <input onChange={func} className="px-5 py-2 text-xl focus:outline-black focus:outline focus:outline-1" id={id} type={type} placeholder={placeholder} name={name}></input>
  </>
  )
}

export function LogInInput(props) {
  const { name, type, placeholder, func } = props;
  return(
    <input onChange={func} className="px-5 py-2 text-xl focus:outline-black focus:outline focus:outline-1" name={name} type={type} placeholder={placeholder}></input>
  )
}