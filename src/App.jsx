import { Link } from "react-router-dom"
import Nav from "./components/Nav"
function App() {

  return (
    <div className="App">
      <Nav />
      <h1>Welcome to Home</h1>
      <Link to='/shop'>To Shop</Link>
    </div>
  )
}

export default App
