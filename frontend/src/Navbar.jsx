import { useState } from "react";
import axios  from "axios";

// import '/styles.css'
function Navbar({setMovies}){

    const [query, setQuery] = useState("");    

    function updateQuery(e){
        setQuery(e.target.value);
        if(e.target.value == ""){
            search('');
        }
    }

    function searchEnter(e){
        if(e.key=='Enter'){
            search(query);
        }
    }

    function search(query){
        axios.get('http://localhost:3000/').then((res)=>{
            let filtered = res.data.filter((movie)=>{
                return movie.name.toLowerCase().includes(query);
            })
            console.log(filtered);
            setMovies(filtered);
        })
    }
        

    return(<>
    <link rel="stylesheet" href="/styles.css" />
    <div className="navbar">
        <nav>
            <h1>IMTb</h1>
            <div className="home_btn">
                <img src="./icons/hamburger.svg" alt="" width="25px" height="25px"/>
                <h2>Menu</h2>
            </div>
            <div className="search">
                <input type="text" onChange={updateQuery} onKeyDown={searchEnter}  placeholder="Search IMTb"/>
                <img src="./icons/search.svg" onClick={()=>search(query)} alt=""  width="25px" height="25px"/>
            </div>
            <div className="watchlist">
                <img src="./icons/bookmark.svg" alt=""  width="25px" height="25px"/>
                <h2>Watch list</h2>
            </div>
            <h2 className="sign-in">Sign in</h2>
        </nav>
    </div>        
 
    </>)
}

export default Navbar;