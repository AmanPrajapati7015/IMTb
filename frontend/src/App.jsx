import { useState } from 'react'
import CastInput from './CastInput';

function App() {
  const [ss, setSS] = useState([])
  const [name, setName] = useState('');
  const [cast, setCast] = useState([]);

  return (
    <>
      <div className="container">
        <h1>File Upload</h1>
        <form id='form'>
            <div className="input-group">
                <label htmlFor='name'>Movie </label>
                <input id='name' onChange={(e)=>{setName(e.target.value)}} placeholder="Enter movie name" />
            </div>
            <br />
            <div className="input-group">
                <label htmlFor='files'>ScreenShots </label>
                <input id='files' type="file" onChange={(e)=>{setSS(e.target.files)}} multiple/>
            </div>
            <br />
            <br />
        </form>
      </div>

      <div className='result'>
        <h3>Name : {name}</h3>
        <h1>ScreenShot</h1>
        <ScreenShots ss={Array.from(ss)}></ScreenShots>
      </div>

      <CastInput cast={cast} setCast={setCast}></CastInput>
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