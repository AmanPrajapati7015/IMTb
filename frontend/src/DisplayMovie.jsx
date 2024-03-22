import './assets/styles.css'
function DisplayMovie({state}){

    return(
        <>

        <div class="container">
        <div class="info">
            <h1 class="title">{state.name}</h1>
            <div class="rating">
                <h2 title="rating"><img src="./src/assets/icons/star-regular.svg" alt="" height="30px"/>  {state.rating}/10</h2>
            </div>
        </div>

        <div class="trailer">
            <h2>Trailer</h2>
            <iframe  src={state.trailer} frameborder="0" height="562px" width="1000px"> </iframe>
        </div>

        <div class="plot">
            <h2>Plot</h2>
            <p>{state.plot}</p>
        </div>

        <div class="cast">
            <h2>Cast</h2>
            <CastGrp cast={state.cast}/>
        </div>

        <div class="screenshot">
            <h2>ScreenShots</h2>
            <ScreenShots ss={Array.from(state.ss)}></ScreenShots>
        </div>

    </div>
    <h1>ThumbNail</h1>
    <div>
        <img src={(state.thumb)? URL.createObjectURL(state.thumb):""} alt=""  height="300px"/>
    </div>

        </>
    )

}
function ScreenShots({ss}){
    return(
      <>
      {ss.map(image=>{
        return(
          <div>
            <img src={URL.createObjectURL(image)}  width= '1000px'/>
          </div>
        )
      })}
      </>
    )
}

function CastGrp({cast}){
    return (
    <>
        <div class="cast-grp">
            {cast.map(person=>{
                return <CastPerson person={person}/>
            })}        
        </div>
    </>)
}

function CastPerson({person}){
    return (
        <>

        <div class="cast-person">
            <div class="img">
                <img src={(person.image)? URL.createObjectURL(person.image):""} alt="img" />
            </div>
            <p>{person.name}</p>  
        </div>
        </>
    )
}
export default DisplayMovie;