import { useState } from 'react'

function CastInput(){


    const [i, setI] = useState(0);
    const [inputs, setInputs] = useState([]);
    const [castInfo, setCastInfo] = useState([]);
 
    function addInput(e){
        e.preventDefault()  

        setCastInfo(castInfo=>{
            // console.log(castInfo, castInfo.length)
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
        {console.log(i)}
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

    console.table(castInfo);
    castInfo[i].name = cast.name;
    castInfo[i].image = cast.file;


    return(
        <>
        <div>
            <label>Name</label>
            <input type="text" onChange={setName} />
            <br />
            <label>Image</label>
            <input onChange={setImage} type="file"/>
            <br />
            <img src={src} alt="" />
            <p>{cast.name}</p>
            <br />
            <br />
        </div>
        </>
    )
}

export default CastInput;