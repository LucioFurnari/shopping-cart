import Header from "../ui/Header";
import { LogInInput } from "../ui/Inputs";

export function LogInPage() {
  return (
    <>
    <Header section='Sign-up' link='/' routeName='Home' item='Sign-up'/>
    <main className="flex flex-col items-center">
      <form className="flex flex-col w-[30rem] bg-zinc-100 border-2 my-20">
        <LogInInput name='user' type='text' placeholder='Username'/>
        <LogInInput name='user-pass' type='text' placeholder='Password' />
        <button type="submit" className="p-4 bg-yellow-800 text-white font-semibold hover:bg-yellow-700 active:bg-yellow-900">Log In</button>
      </form>
    </main>
    </>
  )
}