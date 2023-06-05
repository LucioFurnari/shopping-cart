export function SignUpInput(props) {
  const { name, type, placeholder, labelText, id, func, passValidation, errorMessage, isRequired=false ,patternValue=undefined } = props;

  return(
  <li className="flex flex-col ">
    <label className="pl-5 text-xl" htmlFor={id}>{labelText}</label>
    <input required={isRequired} pattern={patternValue} onChange={func} className=" peer px-5 py-2 text-xl focus:outline-gray-400 focus:outline focus:outline-1 invalid:border-b-2 invalid:focus:border-b-red-600" id={id} type={type} placeholder={placeholder} name={name}></input>
    <span className="invisible peer-invalid:visible ">{errorMessage}</span>
  </li>
  )
}

export function LogInInput(props) {
  const { name, type, placeholder, func } = props;
  return(
    <input onChange={func} className="px-5 py-2 text-xl focus:outline-black focus:outline focus:outline-1" name={name} type={type} placeholder={placeholder}></input>
  )
}