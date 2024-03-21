import { useState } from 'react'
import CastInput from './CastInput';

function App() {
  
  const [movieState, setMovieState] = useState( {name:"",thumb:null, ss:[], cast:[] });
  const [thumbSrc, setThumbSrc] = useState("");
  const [dummy, setDummy] = useState(false);

  function setThumb(e){
    let updatedState = {...movieState};
    updatedState.thumb = e.target.files[0];
    setMovieState(updatedState);
    setThumbSrc(URL.createObjectURL(e.target.files[0]))
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


  return (
    <>
    {console.table(movieState)}
      <div className="container">
        <h1>File Upload</h1>
        <form id='form'>
            <div className="input-group">
                <label htmlFor='name'>Movie </label>
                <input id='name' onChange={setName} placeholder="Enter movie name" />
            </div>
            <br />
            <div className="input-group">
                <label htmlFor='name'>Thumb </label>
                <input type="file" onChange={setThumb}/>
                
            </div>
            <br />
            <div className="input-group">
                <label htmlFor='files'>ScreenShots </label>
                <input id='files' type="file" onChange={setSS} multiple/>
            </div>
            <br />
            <br />
        </form>
      </div>

      <div className='result'>
        <h3>Name : {movieState.name}</h3>
        <img src={thumbSrc} alt=""  height="300px"/>
        <h1>ScreenShot</h1>
        <ScreenShots ss={Array.from(movieState.ss)}></ScreenShots>
      </div>

      <CastInput movieState={movieState} setMovieState={setMovieState} setDummy={setDummy}></CastInput>
      <button className="submit-btn" type='submit'>Upload</button>
    </>

)
}


function ScreenShots({ss}){
  return(
    <>
    {ss.map(image=>{
      return(
        <>
          <img src={URL.createObjectURL(image)}  width= '1000px'/>
          <br/>
        </>
      )
    })}
    </>
  )
}


export default App

// #Todo
// 1. maintain aspect ratio 
// 2. upload section for cast with their names
// 3. make space for thumbnail
// 4. make backend accept this complex state