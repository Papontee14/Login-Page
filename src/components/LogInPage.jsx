import { useState } from "react";
import { Link } from "react-router-dom";

const LogInPage =()=>{

const [userName,setUserName] = useState('')
const [password,setPassword] = useState('')

const [errorUserName,setErrorUserName] = useState('')
const [errorPassword,setErrorPassword] = useState('')
const [errorLogIn,setErrorLogIn] = useState('')

const validateForm = (e) => {
    e.preventDefault();
    if(userName.length>=8){
        setErrorUserName('')
    }
    else{
        setErrorUserName('please enter at least 8 letter')
    }

    if(password.length>=8 && password.length<=15){
        setErrorPassword('')
    }
    else{
        setErrorPassword('your password must have 8-15 letter')
    }
    
    if(password == ''|| userName==''){
        setErrorLogIn('invalid username or password')
    }
    else{
        setErrorLogIn('')
    }
}

    return(

        <div className="flex h-screen">
            
            <div className="w-7/12 h-full bg-gradient-to-r from-cyan-500 to-blue-500 "></div>
            <form className="w-5/12" onSubmit={validateForm}>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <h1 className=" text-3xl m-12">User Login</h1>
                <div className="w-6/12">
                <p className="">Username</p>
                <input placeholder="username" value={userName} onChange={(e)=>setUserName(e.target.value)} className="bg-gray-300 w-full h-8 my-2 px-2"></input>
                <small className="block text-red-400">{errorUserName}</small>
                <p className="mt-5 ">Password</p>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="password" className="placeholder:m-5 bg-gray-300 w-full h-8 my-2 px-2"></input>
                <small className="block text-red-400">{errorPassword}</small>
                <div className="flex justify-between my-4">
                      <div >        
                        <input type="checkbox" ></input>
                        <a className="text-xs mx-2 cursor-pointer ">Keep me logged in</a>
                    </div>
                    <a className="text-xs m-2 cursor-pointer">Forgot password ?</a>
                </div>
                </div>
                <small className="block text-red-400">{errorLogIn}</small>
                <Link type="submit" to="/name_list" className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white w-5/12 h-12 m-2  flex justify-center items-center">Login</Link>
                <div><a className="text-xs">Don't have an account yet?</a><a className="cursor-pointer text-sm mx-1 text-blue-900 underline">Sign up</a></div>
            </div>
            </form>
        </div>
    )
}

export default (LogInPage);