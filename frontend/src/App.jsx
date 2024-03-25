import HomePage from './Homepage';
import PreviewPage from './PreviewPage';
import UploadPage from './UploadPage';
import MoviePage from './MoviePage';
import Navbar from './Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState } from 'react';
import Signup from './Signup';
import Signin from './Signin';


function App() {
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(undefined);


  return (
    <>
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} setMovies={setMovies} />
        <Routes>
          <Route path='/' element={<HomePage movies={movies} setMovies={setMovies} />} />
          <Route path='/upload' element={<UploadPage />} />
          <Route path='/preview' element={<PreviewPage />} />
          <Route path='/movie/:id' element={<MoviePage />} />
          <Route path='/signup' element={<Signup setUser={setUser} />} />
          <Route path='/signin' element={<Signin setUser={setUser} />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}



export default App

// #Todo
// 1. make sign and sign up on backend
// 1. make search in backend instead of frontend
// 2. validate uploads before saving them in backend and give user alert to fill form completely
// 4. maintain watchlist
