import PreviewPage from './PreviewPage';
import UploadPage from './UploadPage';
import {Routes, Route,BrowserRouter, useNavigate} from 'react-router-dom'

function App() {
  

  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={"Home Page"} /> 
        <Route path='/upload' element={<UploadPage />} /> 
        <Route path='/preview' element={<PreviewPage />} /> 
      </Routes>
    </BrowserRouter>
    </>
    //remove Card from DisplayMovie!!

)
}



export default App

// #Todo
// 1. don't allow invalid requests ()
