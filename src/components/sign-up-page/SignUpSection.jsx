import { useState } from "react"
import Header from "../ui/Header"
import { SignUpInput} from "../ui/Inputs"
import { createUser } from "../../AuthenticationFunctions"
import signUpImage from '../../assets/images/signup_image.svg';

export function SignUpPage() {
  const [formInputs, setFormInputs] = useState( { firstName:'', lastName: '', email:'', password: '', rePassword: ''} )

  const inputSignUpList = [
  {
    name: 'firstName',
    id: 'first-name',
    type: 'text',
    placeholder:'First name',
    labelText:'First name',
    isRequired: true,
    patternValue: '([A-Za-z])+',
    errorMessage: 'Use two or more alphabetic characters',
    number: 1,
  },
  {
    name: 'lastName',
    id: 'last-name',
    type: 'text',
    placeholder:'Last name',
    labelText:'Last name',
    isRequired: true,
    patternValue: '([A-Za-z])+',
    errorMessage: 'Use two or more alphabetic characters',
    number: 2,
  },
  {
    name: 'email',
    id: 'email',
    type: 'email',
    placeholder: 'usermail@email.com',
    labelText:'Email',
    isRequired: true,
    patternValue: "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
    errorMessage: 'Enter a valid email, example: usermail@email.com',
    number: 3,
  },
  {
    name: 'password',
    id: 'password',
    type: 'password',
    placeholder: '',
    labelText:'Password',
    isRequired: true,
    patternValue: undefined,
    errorMessage: '',
    number: 4,
  },
  {
    name: 'rePassword',
    id: 'rePassword',
    type: 'password',
    placeholder: '',
    labelText:'Repeat password',
    isRequired: true,
    patternValue: formInputs.password,
    errorMessage: 'The password is not the same',
    number: 5,
  }
]

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setFormInputs({...formInputs, [name]: value})
  }

  const handleForm = (ev) => {
    ev.preventDefault();
    createUser(formInputs.email, formInputs.password, formInputs.firstName, formInputs.lastName)
  }

  return (
    <>
    <Header section='Sign-up' link='/' routeName='Home' item='Sign-up'/>
    <main className="flex md:flex-row flex-col md:justify-center items-center min-h-[calc(100vh-272px)]">
      <form onSubmit={handleForm} className="flex flex-col items-start px-4 max-w-[30rem] w-full my-20">
        <ul>
        {inputSignUpList.map((input) => (
          <SignUpInput 
            key={input.number}
            {...input}
            value={formInputs[input.name]}
            func={handleInput}
          />
        ))}
        </ul>
        <button className="p-4 bg-yellow-800 text-white font-semibold hover:bg-yellow-700 active:bg-yellow-900" type="submit">Create account</button>
      </form>
      <img className="my-20 hidden md:block md:w-full xl:w-1/3 h-auto" src={signUpImage}></img>
    </main>
    </>
  )
}

{/* <SignUpInput func={handleInput} name='firstName' id='first-name' type='text' placeholder='First name' labelText='First name' isRequired={true} patternValue='([A-Za-z])+' errorMessage='Use two or more alphabetic characters'/>
<SignUpInput func={handleInput} name='lastName' id='last-name' type='text' placeholder='Last name' labelText='Last name' isRequired={true} patternValue='([A-Za-z])+' errorMessage='Use two or more alphabetic characters' />
<SignUpInput func={handleInput} name='email' id='email' type='email' placeholder='usermail@email.com' labelText='Email' isRequired={true} errorMessage='Enter a valid email' />
<SignUpInput func={handleInput} name='password' id='password' type='password' placeholder='Password' labelText='Password' isRequired={true} patternValue={formInputs.password} />
<SignUpInput func={handleInput} name='rePassword' id='rePassword' type='password' placeholder='Repeat password' labelText='Repeat password' isRequired={true} patternValue={formInputs.password} errorMessage='The password is not the same'/> */}