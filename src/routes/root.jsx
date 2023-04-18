import dataBase from "../components/db"

export async function loader() {
  return dataBase
}

export function Root() {
  return(
    <div className="home">
      <h2>Taste good, does good</h2>
    </div>
  )
}

