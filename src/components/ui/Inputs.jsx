export function SignUpInput(props) {
  const { name, type, placeholder, labelText, id, func, passValidation, errorMessage, isRequired=false ,patternValue=undefined } = props;

  return(
  <li className="flex flex-col mb-2">
    <fieldset className='relative max-w-[24rem] peer'>
      <input required={isRequired} pattern={patternValue} onChange={func} className=' bg-yellow-700/20 outline-none w-full border-b-[1px] border-black p-4 focus:border-b-2 transition-all peer' id={id} type={type} placeholder=' ' name={name} />
      <label htmlFor={id} className='absolute text-sm left-4 transition-transform peer-focus:-translate-y-0 peer-focus:text-sm peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base' >{labelText}</label>
    </fieldset>
    <span className="hidden peer-invalid:block">{errorMessage}</span> 
    {/* <input required={isRequired} pattern={patternValue} onChange={func} className=" peer px-5 py-2 text-xl focus:outline-gray-400 focus:outline focus:outline-1 invalid:border-b-2 invalid:focus:border-b-red-600" id={id} type={type} placeholder={placeholder} name={name}></input> */}
  </li>
  )
}

export function LogInInput(props) {
  const { name, type, placeholder, func } = props;
  return(
    <input onChange={func} className="px-5 py-2 text-xl focus:outline-black focus:outline focus:outline-1" name={name} type={type} placeholder={placeholder}></input>
  )
}