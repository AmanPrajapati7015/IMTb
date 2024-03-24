import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DisplayMovie from "./DisplayMovie";

function MoviePage() {
    const [isLoading, setIsLoading] = useState(true);
    const [isValidId, setIsValidID] = useState(false);
    const [movieState, setMovieState] = useState({});

    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:3000/movie/' + id)
            .then((res) => {
                setIsLoading(false);
                setIsValidID(true);
                setMovieState(res.data);
            }).catch(err=>{
                setIsLoading(false);
                console.log(err);
            })
    }, [])


return (<>
    {(isLoading)?"Loading":
    (isValidId)?
    <DisplayMovie imageSrc={true} state={movieState} />:"Please recheck URL"}
</>) 
}
export default MoviePage;
