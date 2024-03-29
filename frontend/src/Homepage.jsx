import { useEffect, useState } from "react";
import axios from 'axios';
import './assets/styles.css'
import Card from "./Card";

function HomePage({movies, setMovies}){
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        axios.get('/api').then((res)=>{
            if(res.status == 200){
                setIsLoading(false);
                setMovies(res.data)
            }
        })
    },[]);


    return (<>
    {isLoading ?"loading" :
        <div className="container" >
            <div className="cards">
                {movies.map((movieState)=>{
                    return <Card id={movieState._id} imageSrc={true} state={movieState}/>
                })}
            </div>
        </div>
    }
    </>)

}


export default HomePage;