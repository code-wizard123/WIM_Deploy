import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import img from "../../assets/sa.jpg";


const Login = () => {
    const [_, setCookies] = useCookies(["access_token"]);


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const result = await axios.post("/auth/login", {
                username,
                password,
            });


            setCookies("access_token", result.data.token);
            window.localStorage.setItem("userID", result.data.userID);
            navigate("/");
        } catch (error) {
            alert(error.response.data.message);
        }
    };


    return (
        <section
        className="login"
        id="login"
        style={{ backgroundImage: `url(${img})`, backgroundSize: "cover",marginTop:"300px" }}
        >
        <div className="auth-container" style={{marginTop:"-500px",alignItems:"flex-end"}}>
           
            <div className="card" style={{height:"400px",width:"300px",marginRight:"100px"}}>
                <div style={{padding:"20px"}}>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
               
                {/* <button  style={{backgroundColor: "#003366",color: "white"}} type="submit">Login</button> */}
                <div style={{alignItems:"center",justifyContent:"center",paddingTop:"50px"}}>
                    <button style={{background:"#001524",color:"white"}}>Login</button>
                </div>
               


            </form>
            </div>
            </div>


           
           
        </div>
        </section>
    );
};




export default Login;
