function FormInput({setName, setPlot, setRating, setSS, setThumb, setTrailer}){
    return (<>
        <form id='form'>
            <div className="input-group">
                <label htmlFor='Mname'>Movie </label>
                <input id="Mname" onChange={setName} placeholder="Enter movie name" />
            </div>
            <div className="input-group">
                <label htmlFor='rating'>Rating </label>
                <input id="rating" type="number" max={10} min={0} onChange={setRating}/>
            </div>
            <div className="input-group">
                <label htmlFor='plot'>Plot </label>
                <textarea id="plot" type="text" onChange={setPlot}/>
            </div>
            <div className="input-group">
                <label htmlFor='trailer'>Trailer Link </label>
                <input id="trailer" type='text' onChange={setTrailer}/>
            </div>
            <div className="input-group">
                <label htmlFor='thumb'>Thumb </label>
                <input id="thumb" type="file" accept="image/*" onChange={setThumb}/>
            </div>
            <div className="input-group">
                <label htmlFor='files'>ScreenShots </label>
                <input id='files' type="file" accept="image/*" onChange={setSS} multiple/>
            </div>
        </form>
    </>)
}

export default FormInput