import HomePage from './Homepage';
import PreviewPage from './PreviewPage';
import UploadPage from './UploadPage';
import MoviePage from './MoviePage';
import Navbar from './Navbar';
import {Routes, Route,BrowserRouter} from 'react-router-dom'
import { useState } from 'react';
import Signup from './Signup';
import Signin from './Signin';


function App() {
  const [movies, setMovies] = useState([]);

  return (
    <>
    
    <BrowserRouter>
    <Navbar movies={movies} setMovies={setMovies}/>
      <Routes>
        <Route path='/' element={<HomePage movies={movies} setMovies={setMovies}/>}/> 
        <Route path='/upload' element={<UploadPage />} /> 
        <Route path='/preview' element={<PreviewPage />} /> 
        <Route path='/movie/:id' element={<MoviePage />} /> 
        <Route path='/signup' element={<Signup />} /> 
        <Route path='/signin' element={<Signin />} /> 

        
      </Routes>
    </BrowserRouter>
    </>
)
}



export default App

// #Todo
// 1. make search in backend instead of frontend
// 2. validate uploads before saving them in backend and give user alert to fill form completely
// 3. make sign in and sign up 
// 4. maintain watchlist
