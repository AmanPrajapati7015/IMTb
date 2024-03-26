import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function WatchList() {

    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            axios.get('http://localhost:3000/user/watchlist', { headers: { Authorization: "Bearer " + localStorage.getItem("token") } })
                .then((res) => {
                    setIsLoading(false);
                    setMovies(res.data);
                    console.log(res.data);
                })
                .catch(() => {
                    console.log("invalid auth token");
                })
        } else {
            alert("Sign in to see your WatchList");
        }
    }, [])

    return (<>
        {isLoading ? "loading" :
            <>
                <h1 style={{ textAlign: 'center', marginTop: '30px' }} >WatchList</h1>
                <div className="container" >
                    <div className="cards">
                        {((movies.length) == 0) ? "No Watchlist" :
                            <>
                                {movies.map((movieState) => {
                                    return <Card id={movieState._id} imageSrc={true} state={movieState} />
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