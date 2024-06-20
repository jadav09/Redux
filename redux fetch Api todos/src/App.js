import { useEffect } from "react"
import Add from "./Add"
import "./App.css"
import Home from "./Home"
import "../node_modules/bootstrap/dist/css/bootstrap.css"


import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { useDispatch } from "react-redux"
import { showdata } from "./UserRedu"
import View from "./View"
import Edit from "./Edit"


function App() {

  let dis = useDispatch("")

  useEffect(()=>{
    fetch("http://localhost:400/details")
    .then((res)=>{return res.json()})
    .then((op)=>{
      dis(showdata(op))
    })

  },[])

  return (

    <div className="App">


      <BrowserRouter>
      <Link to={"/add"}></Link>

        <Routes>

            <Route path="/" element={<Home />}></Route>
            <Route path="/add" element={<Add />}></Route>
            <Route path="/view/:vid" element={<View/>}></Route>
            <Route path="/edit/:eid" element={<Edit/>}></Route>

        </Routes>


      </BrowserRouter>


    </div >
  )
}
export default App
