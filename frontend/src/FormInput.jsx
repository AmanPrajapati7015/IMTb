function FormInput({setName, setPlot, setRating, setSS, setThumb, setTrailer}){
    return (<>
        <form id='form'>
            <div className="input-group">
                <label htmlFor='Mname'>Movie </label>
                <input id="Mname" onChange={setName} placeholder="Enter movie name" />
            </div>
            <br />
            <div className="input-group">
                <label htmlFor='rating'>Rating </label>
                <input id="rating" type="number" max={10} min={0} onChange={setRating}/>
            </div>
            <br />
            <div className="input-group">
                <label htmlFor='plot'>Plot </label>
                <textarea type="text" onChange={setPlot}/>
            </div>
            <br />
            <div className="input-group">
                <label htmlFor='plot'>Trailer Link </label>
                <input type="text" onChange={setTrailer}/>
            </div>
            <br />
            <div className="input-group">
                <label htmlFor='thumb'>Thumb </label>
                <input id="thumb" type="file" onChange={setThumb}/>
            </div>
            <br />
            <div className="input-group">
                <label htmlFor='files'>ScreenShots </label>
                <input id='files' type="file" onChange={setSS} multiple/>
            </div>
        </form>
    </>)
}

export default FormInput