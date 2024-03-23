import { useState } from 'react'
import DisplayMovie from './DisplayMovie';
import UploadPage from './UploadPage';
import {Routes, Route,BrowserRouter, useNavigate} from 'react-router-dom'

function App() {
  

  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={"Home Page"} /> 
        <Route path='/upload' element={<UploadPage />} /> 
        <Route path='/preview' element={<DisplayMovie  />} /> 
      </Routes>
    </BrowserRouter>





    </>

)
}



export default App

// #Todo
// 1. make state at backend from coming data