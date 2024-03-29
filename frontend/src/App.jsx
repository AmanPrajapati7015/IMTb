import HomePage from './Homepage';
import PreviewPage from './PreviewPage';
import UploadPage from './UploadPage';
import MoviePage from './MoviePage';
import WatchList from './WatchList';
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
          <Route path='/watchlist' element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}



export default App


