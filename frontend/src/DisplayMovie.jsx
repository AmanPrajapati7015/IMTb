import './assets/styles.css'
import Card from './Card'

function DisplayMovie({imageSrc, state }) {

    return (
        <>
            <div className='result' id="result">
                <div class="container" >
                    {(!imageSrc) ? <Card state={state} imageSrc={imageSrc}/> : ""}
                    <div class="info">
                        <h1 class="title">{state.name}</h1>
                        <div class="rating">
                            <h2 title="rating"><img src="/icons/star-regular.svg" alt="" height="30px" />  {state.rating}/10</h2>
                        </div>
                    </div>
                    <div class="trailer">
                        <h2>Trailer</h2>
                        <iframe src={state.trailer} frameborder="0" height="562px" width="1000px"> </iframe>
                    </div>
                    <div class="plot">
                        <h2>Plot</h2>
                        <p>{state.plot}</p>
                    </div>
                    <div class="cast">
                        <h2>Cast</h2>
                        <CastGrp imageSrc={imageSrc} cast={state.cast} />
                    </div>
                    <div class="screenshot">
                        <h2>ScreenShots</h2>
                        <ScreenShots imageSrc={imageSrc} ss={Array.from(state.ss)}></ScreenShots>
                    </div>
                </div>
            </div>
        </>
    )

}


function ScreenShots({ imageSrc, ss }) {
    return (
        <>
            {ss.map(image => {
                return (
                    <div>
                        <img src={(imageSrc) ? image : (image) ? URL.createObjectURL(image) : ""} width='1000px' />
                    </div>
                )
            })}
        </>
    )
}

function CastGrp({ imageSrc, cast }) {
    return (
        <>
            <div class="cast-grp">
                {cast.map(person => {
                    return <CastPerson imageSrc={imageSrc} person={person} />
                })}
            </div>
        </>)
}

function CastPerson({ imageSrc, person }) {
    return (
        <>
            <div class="cast-person">
                <div class="img">
                    <img src={(imageSrc) ? person.image : (person.image) ? URL.createObjectURL(person.image) : ""} alt="img" />
                </div>
                <p>{person.name}</p>
            </div>
        </>
    )
}


export default DisplayMovie;