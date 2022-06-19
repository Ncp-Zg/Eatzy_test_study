import React from 'react'
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Detail from './pages/Detail';
import Home from './pages/Home';
import List from './pages/List';
import "./App.scss"
import { GuardWrapper } from './components/GuardWrapper';

const App = () => {

  //Routing işlemi yapıldı.

  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<List/>}></Route>
        <Route path="/list/:id" element={<GuardWrapper><Detail/></GuardWrapper>}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App