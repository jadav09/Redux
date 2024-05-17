import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Addinfo from './Addinfo';
import View from './View';
import Edit from './Edit';


function App() {
  return (

    // create redux crud first some npm install in your app
    // npm i redux, react-redux, @reduxjs/toolkit, react-router-dom,bootstrap

    // installatio complate so go to create crud.

    <div className="App">

      <BrowserRouter>

      <Link to={"/"}>Home</Link>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<Addinfo/>}></Route>
        <Route path='/view/:vid' element={<View/>}></Route>
        <Route path='/edit/:eid' element={<Edit/>}></Route>

      </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
