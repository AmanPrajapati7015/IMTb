import HomePage from './Homepage';
import PreviewPage from './PreviewPage';
import UploadPage from './UploadPage';
import MoviePage from './MoviePage';
import {Routes, Route,BrowserRouter, useNavigate} from 'react-router-dom'
import Navbar from './Navbar';

function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/> 
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
