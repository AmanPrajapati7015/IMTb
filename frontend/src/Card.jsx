
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

export default Card
