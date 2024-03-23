import { useEffect, useState } from 'react'

function CastInput({movieState,  setMovieState}){

    const [i, setI] = useState(0);
    const [inputs, setInputs] = useState([]);
    const [castInfo, setCastInfo] = useState([]);
    
    let updateState = movieState;
    updateState.cast = castInfo;
    setMovieState(updateState);

    
    function addInput(e){
        e.preventDefault()  

        setCastInfo(castInfo=>{
            if(i>=castInfo.length){
                castInfo.push({name:"", image:null});
            }
            return castInfo
        });

        let updatedInputs = [...inputs];
        updatedInputs.push(<Input i={i} castInfo={castInfo}/>);
        setInputs(updatedInputs);
        
        
        
        setI(i=>i+1);
    }

    return(     
        <>
        <h2>Cast</h2>
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {inputs.map(comp=>{
                return comp
            })
            } 
        </div>
        <button onClick={addInput} >Add cast</button>
        </> 
    )
}

function Input({i, castInfo}){

    const [cast, setCast] = useState({name:""});
    const [src, setSrc] = useState("");
    function setName(e){
        let updatedCast = {...cast};
        updatedCast.name = e.target.value;
        setCast(updatedCast);
    }

    function setImage(e){
        let updatedCast = {...cast};
        updatedCast.file = e.target.files[0];
        setCast(updatedCast);
        setSrc(URL.createObjectURL(e.target.files[0]));
    }   

    // console.table(castInfo);
    castInfo[i].name = cast.name;
    castInfo[i].image = cast.file;


    return(
        <>
        <div style={{border:'1px solid black', padding:'10px',width:"300px",display:'flex', gap:'10px', flexDirection:'column', margin:'10px'}} >
            <div>
                <label>Name</label>
                <input type="text" onChange={setName} />
            </div>
            <div>
                <label>Image</label>
                <input onChange={setImage} type="file"/>
            </div>
            <div style={{alignSelf:'center'}}>
                <img src={src} alt=""  width='150px'/>
                <p>{cast.name}</p>
            </div>
        </div>
        </>
    )
}

export default CastInput;