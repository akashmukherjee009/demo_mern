import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewNote from './components/NewNote'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
              <div className="App">
                  <ul className="App-header">
                     
                      <li>
                          <Link to="/register">
                              Register
                          </Link>
                      </li>
                      <li>
                          <Link to="/Login">
                              Login
                          </Link>
                      </li>
                  </ul>
                  <Routes>
                      {/* <Route
                          
                          path="/"
                          element={<Home />}
                      ></Route> */}
                      <Route
                          
                          path="/register"
                          element={<NewNote />}
                      ></Route>
                      <Route
                          
                          path="/Login"
                          element={<Login />}
                      ></Route>
                  </Routes>
              </div>
          </Router>


    </>
  )
}

export default App
