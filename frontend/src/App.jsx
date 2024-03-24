import HomePage from './Homepage';
import PreviewPage from './PreviewPage';
import UploadPage from './UploadPage';
import MoviePage from './MoviePage';
import Navbar from './Navbar';
import {Routes, Route,BrowserRouter} from 'react-router-dom'
import { useState } from 'react';

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
      </Routes>
    </BrowserRouter>
    </>
)
}



export default App

// #Todo
// 1. don't allow invalid requests ()
// 3. button in card have lines
