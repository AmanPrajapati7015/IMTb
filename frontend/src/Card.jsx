import { useNavigate } from "react-router-dom"

function Card({ id, state, imageSrc }) {

    const navigate = useNavigate();
    
    function gotoDetails(){
        if(id){
            navigate('/movie/'+id);
        }
    }


    return (
        <div className="card" >
            <a onClick={gotoDetails}>
                <div className="img">
                    <img src={(imageSrc) ? state.thumb : (state.thumb) ? URL.createObjectURL(state.thumb) : ""} alt="" />
                </div>
            </a>
            <div className="bookmark">
                <img src="/icons/bookmark_add.svg" alt="" />
            </div>
            <div className="about" >
                <div className="stars">
                    <img src="/icons/star-solid.svg" alt="" width="20px" height="20px" />
                    <p>{state.rating}</p>
                    <img src="/icons/star-regular.svg" alt="" width="20px" height="20px" />
                </div>
                <h3>{state.name}</h3>
                <button>+ Watchlist</button>
                <a href={state.trailer}>
                    <div className="trailer">
                        <img src="/icons/play-solid.svg" alt="" width="15px" height="15px" />
                        <p>Trailer</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Card
