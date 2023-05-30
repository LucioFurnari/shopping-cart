import { useState } from "react";
import Header from "../ui/Header";
import { LogInInput } from "../ui/Inputs";
import { signInUser, data } from "../../AuthenticationFunctions";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase";

export function LogInPage() {
  const [formInputs, setFormInputs] = useState({ "user":'', "user-pass":'' })
  

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setFormInputs({...formInputs, [name]: value})
  }

  const handleForm = (ev) => {
    ev.preventDefault()
    signInUser(formInputs.user, formInputs["user-pass"])
  }

  return (
    <>
    <Header section='Sign-up' link='/' routeName='Home' item='Sign-up'/>
    <main className="flex flex-col items-center">
      <form onSubmit={handleForm} className="flex flex-col w-[30rem] bg-zinc-100 border-2 my-20">
        <LogInInput func={handleInput} name='user' type='text' placeholder='Username'/>
        <LogInInput func={handleInput} name='user-pass' type='text' placeholder='Password' />
        <button type="submit" className="p-4 bg-yellow-800 text-white font-semibold hover:bg-yellow-700 active:bg-yellow-900">Log In</button>
      </form>
    </main>
    </>
  )
}