import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home1 from './Home1';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import AddEmp from './AddEmp';
import View from './View';
import Edit from './Edit';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Link to={"/"}>home</Link>
        <Routes>
          <Route path='/' element={<Home1/>}></Route>
          <Route path='/add' element={<AddEmp/>}></Route>
          <Route path='/view/:vid' element={<View/>}></Route>
          <Route path='/edit/:eid' element={<Edit/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;


// work with redux. first some instataion in npm

// ==> npm i redux
// ==> npm i react-redux
// ==> npm i @reduxjs/toolkit

// main 3 files on redux
// 1.useReduser ===> 2.store ===> 3.action 