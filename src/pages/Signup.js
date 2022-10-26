import { useState, useEffect } from "react"

export default function SignUp(){
const [filledForm, setFilledForm] = useState(false);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

useEffect(() => {
   if(email!=="" && password!==""){
    setFilledForm(true)
   }else{
    setFilledForm(false)
   }

}, [email,password]);


    return(
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <div className="container">
            <div>
                <label htmlFor="email"></label>
                <input typeof="email" name="email" placeholder="Email Address" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password"></label>
                <input typeof="text" name="password" placeholder="Password" className="form-control" min={8} max={20} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className={filledForm ?"btn btn-success w-100 mt-3" : "btn bg-secondary btn-disabled w-100 mt-3"}>Sign In</button>    
            </div>
            
        </div>
    )
}