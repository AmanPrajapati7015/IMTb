import { useNavigate } from "react-router-dom"

function Card({ id, state, imageSrc }) {

    const navigate = useNavigate();
    
    function gotoDetails(){
        if(id){
            navigate('/movie/'+id);
        }
    }


    return (
        <div class="card" >
            <a onClick={gotoDetails}>
                <div class="img">
                    <img src={(imageSrc) ? state.thumb : (state.thumb) ? URL.createObjectURL(state.thumb) : ""} alt="" />
                </div>
            </a>
            <div class="bookmark">
                <img src="../public/icons/bookmark_add.svg" alt="" />
            </div>
            <div class="about" >
                <div class="stars">
                    <img src="../public/icons/star-solid.svg" alt="" width="20px" height="20px" />
                    <p>{state.rating}</p>
                    <img src="../public/icons/star-regular.svg" alt="" width="20px" height="20px" />
                </div>
                <h3>{state.name}</h3>
                <button>+ Watchlist</button>
                <a href={state.trailer}>
                    <div class="trailer">
                        <img src="../public/icons/play-solid.svg" alt="" width="15px" height="15px" />
                        <p>Trailer</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Card
