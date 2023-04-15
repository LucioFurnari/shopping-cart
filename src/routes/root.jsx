import dataBase from "../components/db"

export async function loader() {
  return dataBase
}

export function Root() {
  return(
    <div>
      <h1>Welcome to Home</h1>
    </div>
  )
}

