import { BrowserRouter as Router } from "react-router-dom";

export default function App (){
return (
  <Router>
    <ul>
      <li><Link to="/">Home</Link>
      </li>
      <li><Link to="/about">About</Link>
      </li>
    <li><Link to="/login">Login</Link>
    </li>
    <li><Link to="/register">Register</Link>
    </li>
    </ul>
  </Router>
)
}