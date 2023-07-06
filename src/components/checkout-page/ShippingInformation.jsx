
export function ShippingInformation() {
  return (
    <form className="p-4">
      <fieldset className="mb-8">
        <legend className="text-xl font-semibold mb-4">Shipping Information</legend>
        <ul className="grid grid-cols-2">
          <FormInput labelText='First name' inputId='first_name' />
          <FormInput labelText='Last name' inputId='last_name' />
          <FormInput labelText='City' inputId='user_city' />
          <FormInput labelText='State' inputId='user_state' />
          <FormInput style='bg-red-500' labelText='Address' inputId='user_address' />
          <FormInput labelText='Zip code' inputId='user_zip'/>
        </ul>
      </fieldset>
      <button className="px-8 py-4 bg-yellow-600 text-white ">Complete purchase</button>
    </form>
  )
}

function FormInput(props) {
  const { labelText, inputId, style } = props;
  return (
    <fieldset className='relative w-96 peer mb-4'>
      <input className=' bg-yellow-700/20 outline-none w-full border-b-[1px] border-black p-4 focus:border-b-2 transition-all peer' id={inputId} type='text' placeholder=' ' />
      <label htmlFor={inputId} className='absolute text-sm left-4 transition-transform peer-focus:-translate-y-0 peer-focus:text-sm peer-placeholder-shown:translate-y-4 peer-placeholder-shown:text-base' >{labelText}</label>
    </fieldset>
    // <li className={`${style} py-4 px-2`}>
    //   <label className="block pb-2" htmlFor={inputId}>{labelText}</label>
    //   <input className='border-black border-[1px] w-full py-2' type="text" id={inputId}></input>
    // </li>
  )
}