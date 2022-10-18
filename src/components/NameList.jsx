import { useState } from "react";
import mockData from "../data/data.json"
import { Link } from "react-router-dom";
import FormComponent from "./Form";


const NameList =()=>{

    const [info,setInfo]=useState(mockData);

 

    const map1 =()=>
     info.map((item)=>(
        <div className="my-10 ">     
            <Link to='/form_coponent'  className="cursor-pointer hover:text-white bg-slate-200 py-6 px-80 transition ease-in-out delay-150 flex hover:bg-indigo-500 duration-250 "  >{item.first_name} {item.last_name}</Link>  
        </div>
        )); 

    

    return(
        <div className="min-h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-14">
            <div className="bg-white w-full h-full pl-10 pb-10 flex ">

                <div className="w-8/12 flex flex-col w-8/12 justify-center items-center">
                <h1 className="text-3xl mt-12 w-4/12 flex justify-center p-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500">Name List</h1>
            <span className="">{map1()}</span>
            </div>
            <div className="p-14 w-4/12  ">
                <div className="w-32 mx-12  h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full translate-y-1/4"></div>
                <div className="my-40 w-48 h-48 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full translate-y-2/4 translate-x-2/4"></div>
                <div className="my-40 w-40 h-40 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full translate-y-full translate-x-2/4"></div>
            </div>
        </div>
        </div>
    )
}

export default (NameList);