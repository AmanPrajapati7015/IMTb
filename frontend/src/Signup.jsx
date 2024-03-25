import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup({setUser}) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function signup(){
        if(username == "" || password==""){
            alert("username and password can't be empty");
            return;
        }

        axios.post('http://localhost:3000/users/signup',{username,password})
        .then((res)=>{
            localStorage.setItem('token',res.data.token);
            setUser(username);
            navigate('/')
        })
        .catch((err)=>{
            if(err.response){
                if(err.response.status == 403){
                    alert("Username is already taken!!\nPlease choose anything else")
                }
            }
        })

    }
    
    return (<>
        <div className="container">
            <div className="wrap" >
                <div className="field">
                    <label htmlFor="username">User Name : </label>
                    <input onChange={(e)=>setUserName(e.target.value)} id="username" placeholder="username" type="text" />
                </div>
                <div className="field">
                    <label htmlFor="password">Password : </label>
                    <input onChange={(e)=>setPassword(e.target.value)} id="password" placeholder="password" type="password" />
                </div>
                <div className="field">
                    <button onClick={signup} >Sign up</button>
                </div>
            </div>
        </div>
    </>)
    

}
export default Signup