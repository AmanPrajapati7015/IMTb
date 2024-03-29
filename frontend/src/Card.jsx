import { useNavigate } from "react-router-dom"
import axios from 'axios';
import { useState } from "react";

function Card({ id, state, imageSrc, fromWatchList }) {

    const [isRemoved, setIsRemoved] = useState(false);
    const navigate = useNavigate();

    function gotoDetails() {
        if (id) {
            navigate('/movie/' + id);
        }
    }

    function removeWatchList(){
        if (localStorage.getItem("token")) {
            axios.put('http://localhost:3000/user/remove-watchlist', { id }, { headers: { authorization: "Bearer " + localStorage.getItem("token") } })
                .then((res) => {
                    setIsRemoved(true);
                })
                .catch((err) => {
                    if (err.response.status == 403) {
                        alert(`${state.name} was not in watchlist`);
                    }
                    else {
                        console.log("invalid auth token");
                    }
                })
        }
        else {
            alert("Sign in first!!")
        }
    }



    function addToWatchList() {
        if (localStorage.getItem("token")) {
            axios.put('http://localhost:3000/user/add-to-watchlist', { id }, { headers: { Authorization: "Bearer " + localStorage.getItem("token") } })
                .then((res) => {
                    alert(`${state.name} added to watchList!`);
                })
                .catch((err) => {
                    if (err.response.status == 403) {
                        alert(`${state.name} already exist in watchList!`)
                    }
                    else {
                        console.log("invalid auth token");
                    }
                })
        }
        else {
            alert("Sign in first!!")
        }

    }


    return (
        (!isRemoved)?
        <div className="card" >
            <a onClick={gotoDetails}>
                <div className="img">
                    <img src={(imageSrc) ? state.thumb : (state.thumb) ? URL.createObjectURL(state.thumb) : ""} alt="" />
                </div>
            </a>
            {(!fromWatchList)?<>
            <div onClick={addToWatchList} className="bookmark">
                <img src="/icons/bookmark_add.svg" alt="" />
            </div>
            </>:""}
            <div className="about" >
                <div className="stars">
                    <img src="/icons/star-solid.svg" alt="" width="20px" height="20px" />
                    <p>{state.rating}</p>
                    <img src="/icons/star-regular.svg" alt="" width="20px" height="20px" />
                </div>
                <h3>{state.name}</h3>

                {(fromWatchList) ?
                    <button onClick={removeWatchList}>Watched</button> :
                    <button onClick={addToWatchList}>+ Watchlist</button> 
                }
                <a href={state.trailer}>
                    <div className="trailer">
                        <img src="/icons/play-solid.svg" alt="" width="15px" height="15px" />
                        <p>Trailer</p>
                    </div>
                </a>
            </div>
        </div>
        : ""
    )
}

export default Card
