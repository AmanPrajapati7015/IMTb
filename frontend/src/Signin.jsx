import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signin({setUser}) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function signin(){
        if(username == "" || password==""){
            alert("username and password can't be empty");
            return;
        }

        axios.post('http://localhost:3000/users/signin',"", {headers:{username,password}})
        .then((res)=>{
            localStorage.setItem('token',res.data.token);
            console.log(res.data.token);
            setUser(username);
            navigate('/')
        })
        .catch((err)=>{
            if(err.response){
                if(err.response.status == 403){
                    alert("wrong username or password!")
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
                    <button onClick={signin} >Sign In</button>
                </div>
            </div>
        </div>
    </>)
    

}
export default Signin