import { useState } from "react"


const FormComponent =(key,fullname)=>{

    const [tel,setTel] = useState('')
    const [email,setEmail] = useState('')

    const [errorTel,setErrorTel] = useState('')
    const [errorEmail,setErrorEmail] = useState('')

    const validateForm = (e) => {
        e.preventDefault();
        if(tel.length==10 && parseInt(tel) !== NaN){
            setErrorTel('')
        }
        else{
            setErrorTel('invalid phone number')
        }
        if(email.includes("@")){
            setErrorEmail('')
        }
        else{
          setErrorEmail('invalid email')
         
        }
        console.log(parseInt(tel))
    }

    return(
        <div className="min-h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-14 flex flex-col justify-center items-center">
            <div className="bg-white w-4/12 p-12 flex flex-col justify-center">
                     <h1 className=" text-3xl flex justify-center mb-12">Information</h1>
            <div>
               
                <div>
                    <p className="mb-4">ID :  </p>
                    <p className="mb-4">Name : </p>
                </div>
                <form onSubmit={validateForm}>
                <div className="mb-4">
                    <p className="mb-2">Tel.</p>
                    <input type="tel"  value={tel} onChange={(e)=>setTel(e.target.value)}  className="rounded-sm   placeholder:m-5 bg-gray-200 w-8/12 h-8 px-2" ></input>
                    <small className="block text-red-400">{errorTel}</small>
                </div>
                <div className="mb-4">
                    <p className="mb-2">Email</p>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="rounded-sm   placeholder:m-5 bg-gray-200 w-8/12 h-8 px-2"  ></input>
                    <small className="block text-red-400">{errorEmail}</small>
                </div>
                <button type="submit" className="rounded-sm p-2 bg-blue-500 mt-4">Save</button>
                </form>
  
           </div> 
            
            </div>
      
        </div>
    )
    }
export default (FormComponent)