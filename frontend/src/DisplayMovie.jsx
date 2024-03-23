import './assets/styles.css'
import { useLocation } from 'react-router-dom';

function DisplayMovie({ state }) {

    let imageSrc = false;

    const location = useLocation();
    if (location.state) {
        state = location.state;
        imageSrc = true;
        console.log(state);

    }

    return (
        <>
            <div className='result' style={{ backgroundColor: 'black', padding: "50px 0" }}>
                <div class="container" >

                    {(!imageSrc) ? <Card state={state} imageSrc={imageSrc}/> : ""}

                    <div class="info">
                        <h1 class="title">{state.name}</h1>
                        <div class="rating">
                            <h2 title="rating"><img src="./src/assets/icons/star-regular.svg" alt="" height="30px" />  {state.rating}/10</h2>
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

function Card({ state, imageSrc }) {
    return (
        <div class="card" >
            <div class="img">
                <img src={(imageSrc) ? state.thumb : (state.thumb) ? URL.createObjectURL(state.thumb) : ""} alt="" />
            </div>
            <div class="bookmark">
                <img src="./src/assets/icons/bookmark_add.svg" alt="" />
            </div>
            <div class="about" >
                <div class="stars">
                    <img src="./src/assets/icons/star-solid.svg" alt="" width="20px" height="20px" />
                    <p>{state.rating}</p>
                    <img src="./src/assets/icons/star-regular.svg" alt="" width="20px" height="20px" />
                </div>
                <h3>{state.name}</h3>
                <button>+ Watchlist</button>
                <a href={state.trailer}>
                    <div class="trailer">
                        <img src="./src/assets/icons/play-solid.svg" alt="" width="15px" height="15px" />
                        <p>Trailer</p>
                    </div>
                </a>
            </div>
        </div>
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
                {console.log(cast)}
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