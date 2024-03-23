import { useState } from 'react'
import axios from 'axios'
import CastInput from './CastInput';
import DisplayMovie from './DisplayMovie';
import FormInput from './FormInput';
import {Router, Routes, Route, useNavigate} from 'react-router-dom'

function App() {
  
  const [movieState, setMovieState] = useState( {name:"", rating:0, plot:'', trailer:'',thumb:null, ss:[], cast:[] });
  const [dummy, setDummy] = useState(0);

  function setThumb(e){
    let updatedState = {...movieState};
    updatedState.thumb = e.target.files[0];
    setMovieState(updatedState);
  }

  function setSS(e){
    let updatedState = {...movieState};
    updatedState.ss = e.target.files;
    setMovieState(updatedState);    
  }

  function setName(e){
    let updatedState = {...movieState};
    updatedState.name= e.target.value;
    setMovieState(updatedState);     
  }

  function setRating(e){
    let updatedState = {...movieState};
    updatedState.rating= e.target.value;
    setMovieState(updatedState);
  }

  function setPlot(e){
    let updatedState = {...movieState};
    updatedState.plot= e.target.value;
    setMovieState(updatedState);
  }

  function setTrailer(e){
    let updatedState = {...movieState};
    updatedState.trailer= e.target.value;
    setMovieState(updatedState);
  }

  function makePreview(e){
    e.preventDefault();
    let temp = dummy;
    temp++;
    setDummy(temp);
  }

  async function uploadMovie(e){
    e.preventDefault();
    setDummy(1);
    console.log(movieState);

    const formData = new FormData();
    formData.append('thumb', movieState.thumb);
    for(let i=0 ; i<movieState.ss.length;i++){
      formData.append('ss', movieState.ss[i]);
    }
    for(let i=0 ; i<movieState.cast.length;i++){
      formData.append('cast', movieState.cast[i].image);
    }
    for(let i=0 ; i<movieState.cast.length;i++){
      formData.append('castName', movieState.cast[i].name);
    }
    formData.append('name', movieState.name);
    formData.append('plot', movieState.plot);
    formData.append('rating', movieState.rating);
    formData.append('trailer', movieState.trailer);
    // console.log(formData);

    let res = await axios.post("http://localhost:3000/upload", formData)
    if(res.status == 200){
      const navigate = useNavigate();
      navigate('/preview');
    }

    console.log(res.data);
  }

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' />
        <Route path='/upload' >
          {console.log(movieState)}
          <div className="container">
            <h1>Add Movie</h1>
            <FormInput setName={setName} setRating={setRating} setPlot={setPlot} setThumb={setThumb} setSS={setSS} setTrailer={setTrailer} />
            <CastInput movieState={movieState} setMovieState={setMovieState} ></CastInput>
            <button onClick={makePreview} >Check Preview</button>
            <button onClick={uploadMovie}>Upload</button>
          </div>

          {(dummy)?
          <div className='result' style={{backgroundColor:'black', padding:"50px 0"}}>
            <DisplayMovie state={movieState}/>
          </div>
          :""}
        </Route>

        <Route path='/preview'>
          <DisplayMovie state={movieState}/>
        </Route>
      </Routes>
    </Router>





    </>

)
}


export default App

// #Todo
// 1. make state at backend from coming data