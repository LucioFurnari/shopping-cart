
export function ShippingInformation() {
  return (
    <form>
      <fieldset>
        <legend>Shipping Information</legend>
        <ul>
          <FormInput labelText='First name' inputId='first_name' />
          <FormInput labelText='Last name' inputId='last_name' />
          <FormInput labelText='Address' inputId='user_address' />
        </ul>
      </fieldset>
    </form>
  )
}

function FormInput(props) {
  const { labelText, inputId } = props;
  return (
    <li>
      <label htmlFor={inputId}>{labelText}</label>
      <input type="text" id={inputId} className=' border-black border-[1px]'></input>
    </li>
  )
}