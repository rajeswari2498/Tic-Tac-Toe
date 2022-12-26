import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

function SignUp(setIsAuth){
    const cookies = new Cookies();
    const [user, setUser] = useState(null);

    const signUp = () => {
        Axios.post("http://localhost:3001/signup", user).the((res) =>{
            const {token, userId, firstName, lastName, Emailid, hashedPassword} =
                res.data;
            cookies.set("token",token);
            cookies.set("userId",userId);
            cookies.set("firstName",firstName);
            cookies.set("lastName",lastName);
            cookies.set("Emailid",Emailid);
            cookies.set("hashedPassword",hashedPassword);
            setIsAuth(true);

        });
    };
    return(
        <div className = "signUp">
            <label>Signup</label>
            <input placeholder="Your Name" 
            onChange={(event) => {
                setUser({...user, YourName: event.target.value});
            }
            } />
            <input placeholder="UserName" 
            onChange={(event) => {
                setUser({...user, UserName: event.target.value});
            }
            } />
            <input placeholder="Email ID" 
            onChange={(event) => {
                setUser({...user, EmailID: event.target.value});
            }
            } />
            <input placeholder="Password" 
            type = "password"
            onChange={(event) => {
                setUser({...user, Password: event.target.value});
            }
            } />
            <button onClick ={signUp}>Sign Up</button>
        </div>
    );
}

export default SignUp;