import { useState } from 'react'
import CastInput from './CastInput';
import DisplayMovie from './DisplayMovie';
import FormInput from './FormInput';

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


  return (
    <>
    {console.log(movieState)}
      <div className="container">
        <h1>Add Movie</h1>
        <FormInput setName={setName} setRating={setRating} setPlot={setPlot} setThumb={setThumb} setSS={setSS} setTrailer={setTrailer} />
        <CastInput movieState={movieState} setMovieState={setMovieState} ></CastInput>
      </div>
      <button onClick={makePreview} >Check Preview</button>
      {
      (dummy)?
      <div className='result'>
        <h1>Movie Preview</h1>
        <DisplayMovie state={movieState}/>
      </div>
      :"" 
      }
      
      <button className="submit-btn" type='submit'>Upload</button>
    </>

)
}


export default App

// #Todo
// 1. stucture form and then preview of movie page
// 2. make backend accept this complex state