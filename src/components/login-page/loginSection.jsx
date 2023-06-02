import { useContext, useState } from "react";
import Header from "../ui/Header";
import { LogInInput } from "../ui/Inputs";

// Navigate component to take user to other route//
import { Navigate } from "react-router-dom";

// Handle Log in function //
import { handleLogIn } from "../../AuthenticationFunctions";
// User state dispatch //
import { userDispatchContext, userContext } from "../ShopContext";

export function LogInPage() {
  const [formInputs, setFormInputs] = useState({ "user":'', "user-pass":'' })

  const userDispatch = useContext(userDispatchContext)

  const userInfo = useContext(userContext)

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setFormInputs({...formInputs, [name]: value})
  }

  return (
    <>
    <Header section='Sign-up' link='/' routeName='Home' item='Sign-up'/>
    <main className="flex flex-col items-center min-h-[calc(100vh-272px)]">
      {userInfo.isSigned && <Navigate to='/' />}
      <form onSubmit={(ev) => handleLogIn(ev, formInputs.user, formInputs["user-pass"], userDispatch)} className="flex flex-col w-[30rem] bg-zinc-100 border-2 my-20">
        <LogInInput func={handleInput} name='user' type='text' placeholder='Username'/>
        <LogInInput func={handleInput} name='user-pass' type='text' placeholder='Password' />
        <button type="submit" className="p-4 bg-yellow-800 text-white font-semibold hover:bg-yellow-700 active:bg-yellow-900">Log In</button>
      </form>
    </main>
    </>
  )
}