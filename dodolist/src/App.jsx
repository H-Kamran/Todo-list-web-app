// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from "react-router-dom";

// import { Header } from "./components/Header/Header.js";
import { Home } from "./pages/Home/Home.jsx";
import { Registration } from "./pages/Registration/Registration.jsx";
import Todo from "./pages/Todo/Todo.jsx";

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Header /> */}
      {/* <main className="container"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Todo" element={<Todo />} />
        {/* <Route path="/About" element={<About />} />
          <Route path="/Discover" element={<Discover />} />
          <Route path="/Books/:q" element={<Books />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/BookDetails" element={<BookDetails />} /> */}
      </Routes>
      {/* </main> */}
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      {/* <Counter /> */}
    </div>
  )
}

export default App
