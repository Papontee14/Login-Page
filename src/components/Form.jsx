import { useState } from "react";

const FormComponent = (key, fullname) => {
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  const [errorTel, setErrorTel] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const validateForm = (e) => {
    e.preventDefault();
    if (tel.length == 10 && parseInt(tel) !== NaN) {
      setErrorTel("");
    } else {
      setErrorTel("invalid phone number");
    }
    if (email.includes("@")) {
      setErrorEmail("");
    } else {
      setErrorEmail("invalid email");
    }
    console.log(parseInt(tel));
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-14 flex  justify-center ">
      <div className="w-4/12">
        <h1 className="text-3xl text-white">Personal Information</h1>
        <p className="mt-8 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas eligendi perferendis veniam illo, necessitatibus praesentium alias odit laboriosam commodi labore doloremque explicabo reiciendis aut quis sequi ducimus pariatur nisi!</p>
      </div>
      <div className="bg-white w-8/12 p-12 flex flex-col justify-center  mb-4">
        <div>
          <div className="flex  w-full mb-4">
            <div className="flex-col w-6/12 pr-1">    <p>First name</p>
           <input type='text' className="rounded-sm   placeholder:m-5 border-gray-400 border-solid border w-full h-8 px-2"></input></div>
       <div className="flex-col w-6/12 ">     <p>Last name</p>
           <input type='text' className="rounded-sm   placeholder:m-5 border-gray-400 border-solid border w-full h-8 px-2"></input></div>
      
          </div>
          <form onSubmit={validateForm}> 
            <div className="mb-4">
              <p className="mb-2">Email</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-sm   placeholder:m-5 border-gray-400 border-solid border w-8/12 h-8 px-2"
              ></input>
              <small className="block text-red-400">{errorEmail}</small>
            </div>
            <div className="mb-4">
              <p className="mb-2">Tel.</p>
              <input
                type="tel"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                className="rounded-sm   placeholder:m-5 border-gray-400 border-solid border w-8/12 h-8 px-2"
              ></input>
              <small className="block text-red-400">{errorTel}</small>
            </div>
            <div className="flex justify-end">  <button type="submit" className="rounded-sm px-4 py-2 bg-blue-500 mt-4">
              Save
            </button></div>
          
          </form>
        </div>
      </div>
    </div>
  );
};
export default FormComponent;
