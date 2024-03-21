import { useState } from 'react'

function CastInput({cast, setCast}){

    const [inputs, setInputs] = useState([]);

    function addInput(e){
        e.preventDefault()        
        let updatedInputs = [...inputs];
        updatedInputs.push(<Input/>)
        setInputs(updatedInputs)
    }

    return(     
        <>
        {inputs.map(comp=>{
            return comp
        })
        } 
        <br />
        <br />      
        <button onClick={addInput} >Add cast</button>
        <br />
        </> 
    )
}

function Input(){

    const [src, setSrc] = useState("");
    const [name, setName] = useState("");

    function setSource(e){
        setSrc(URL.createObjectURL(e.target.files[0]))
        console.log(e.target.files[0]);
    }

    return(
        <>
        <div>
            <label>Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
            <br />
            <label>Image</label>
            <input onChange={setSource} type="file"/>
            <br />
            <img src={src} alt="" />
            <p>{name}</p>
            <br />
            <br />
        </div>
        </>
    )
}

export default CastInput;