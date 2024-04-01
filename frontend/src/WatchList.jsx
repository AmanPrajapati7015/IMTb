import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function WatchList() {

    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const nevigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            axios.get('/api/user/watchlist', { headers: { Authorization: "Bearer " + localStorage.getItem("token") } })
                .then((res) => {
                    setIsLoading(false);
                    setMovies(res.data);
                })
                .catch(() => {
                    console.log("invalid auth token");
                })
        } else {
            alert("Sign in to see your WatchList");
            nevigate('/');
        }
    }, [])

    return (<>
        {isLoading ? "loading" :
            <>
                <h1 style={{ textAlign: 'center', marginTop: '30px' }} >WatchList</h1>
                <div className="container" >
                    <div className="cards">
                        {((movies.length) == 0) ? "Empty Watchlist" :
                            <>
                                {movies.map((movieState) => {
                                    return <Card id={movieState._id} imageSrc={true} state={movieState} fromWatchList={true}/>
                                })}
                            </>
                        }
                    </div>
                </div>
            </>
        }
    </>)
}
export default WatchList;