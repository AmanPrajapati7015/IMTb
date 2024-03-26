import { useEffect, useState } from "react";
import axios  from "axios";
import { useNavigate } from "react-router-dom";

// import '/styles.css'
function Navbar({setMovies, user, setUser}){

    const navigate = useNavigate();

    const [query, setQuery] = useState("");    


    useEffect(()=>{
        if(localStorage.getItem("token")){
            axios.get('http://localhost:3000/me', {headers:{Authorization:"Bearer "+localStorage.getItem("token")}})
            .then((res)=>{
                setUser(res.data);
            })
            .catch(()=>{   
                console.log("invalid auth token");
            })
        }
    },[])


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

    function search(query){ //have to remove from here and use on backend
        axios.get('http://localhost:3000/').then((res)=>{
            let filtered = res.data.filter((movie)=>{
                return movie.name.toLowerCase().includes(query);
            })
            setMovies(filtered);
        })
    }        

    function signOut(){
        localStorage.removeItem("token");
        setUser("");
    }

    return(<>
    <link rel="stylesheet" href="/styles.css" />
    <div className="navbar">
        <nav>
            <h1 onClick={()=>navigate("/")}>IMTb</h1>
            <div className="search">
                <input type="text" onChange={updateQuery} onKeyDown={searchEnter}  placeholder="Search IMTb"/>
                <img src="./icons/search.svg" onClick={()=>search(query)} alt=""  width="25px" height="25px"/>
            </div>
            <div className="watchlist">
                <img src="./icons/bookmark.svg" alt=""  width="25px" height="25px"/>
                <h2 onClick={()=>navigate('/watchlist')}>Watch list</h2>
            </div>
            {(!user)?<>
                <h2 onClick={()=>navigate("/signin")} className="sign-in">Sign in</h2>
                <h2 onClick={()=>navigate("/signup")} className="sign-in">Sign up</h2>
            </>:<>
                <h2>{user}</h2>
                <h2 onClick={signOut}>Log Out</h2>
            </>
            }
        </nav>
    </div>        
 
    </>)
}

export default Navbar;