import React from 'react';
import {useState} from 'react'
import user_icon from '../../assets/user.png';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/padlock.png';
import phone_icon from '../../assets/telephone.png'; // Assuming you have a phone icon
import background_image from '../../assets/BlogPhoto.jpeg'; 
import idCard_image from '../../assets/id-card.png'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Register() {

const [id, setId]= useState("")
const [Fullname, setFullName]= useState("")
const [email, setEmail]= useState("")
const [password, setPassword]= useState("")
const [phoneNumber, setPhoneNumber]= useState("")

const history = useHistory();

const IsValidate = () => {
  let isproceed = true;
  let errorMsg='Please enter the value in ';
  if(id===null || id===''){
    isproceed = false;
    errorMsg += ' Username '
  }
  if(Fullname===null || Fullname===''){
    isproceed = false;
    errorMsg += ' Fullname '
  }
  if(email===null || email===''){
    isproceed = false;
    errorMsg += ' email '
  }
  if(password===null || password===''){
    isproceed = false;
    errorMsg += ' password '
  }
  if(phoneNumber===null || phoneNumber===''){
    isproceed = false;
    errorMsg += ' phoneNumber '
  }
  if(!isproceed){
    toast.warning(errorMsg)
  }else{
    if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

    }else{
      isproceed = false;
      toast.warning('Please enter the valid email')
    }
  }
  return isproceed;

}

  const handleSubmit = (e) => {
    e.preventDefault();
    let regObj = {id, Fullname, email, password, phoneNumber};
    console.log(regObj);
    if(IsValidate()){

    fetch("http://localhost:8000/user",{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(regObj)
    }).then((res) => {
      toast.success('Registered successfully')
      history.push('/login')
    }).catch((err) => {
      toast.error('Failed:' + err.message)
    });
  }
}
  return (
    <>
    
      <div className="relative">
        <div className="absolute inset-0 bg-cover bg-center m-atuo" style={{ backgroundImage: `url(${background_image})`, filter: 'blur(2px)', zIndex: -1 }}></div>
        <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white max-w-lg mx-auto p-10 rounded-lg shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
            <div className="text-center text-4xl font-bold mb-6">Sign Up</div>
            <div className="inputs">
              <div className="input flex items-center border-b-2 border-gray-300 mb-6">
                <img src={user_icon} alt="" className="mr-4 w-6 h-6" />
                <input  value={id}  onChange={e => setId(e.target.value)} type="text" className="focus:outline-none w-full bg-transparent text-xl" placeholder="Username"  />
              </div>
              <div className="input flex items-center border-b-2 border-gray-300 mb-6">
                <img src={idCard_image} alt="" className="mr-4 w-6 h-6" />
                <input value={Fullname} onChange={e => setFullName(e.target.value)} type="text" className="focus:outline-none w-full bg-transparent text-xl" placeholder="Full Name"  />
              </div>
              <div className="input flex items-center border-b-2 border-gray-300 mb-6">
                <img src={email_icon} alt="" className="mr-4 w-6 h-6" />
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="focus:outline-none w-full bg-transparent text-xl" placeholder="Email"  />
              </div>
              <div className="input flex items-center border-b-2 border-gray-300 mb-6">
                <img src={password_icon} alt="" className="mr-4 w-6 h-6" />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="focus:outline-none w-full bg-transparent text-xl" placeholder="Password"  />
              </div>
              <div className="input flex items-center border-b-2 border-gray-300 mb-6">
                <img src={phone_icon} alt="" className="mr-4 w-6 h-6" style={{ filter: 'grayscale(100%)' }} />
                <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type="number" className="focus:outline-none w-full bg-transparent text-xl" placeholder="Number" />
              </div>
            </div>
            <div className="forgot-password text-lg text-gray-600 mb-6">Forgot password? <span className="text-blue-500">Click here!</span></div>
            <div className="submit-container flex justify-between">
              <button type="submit" className="submit bg-blue-700 text-white py-3 px-6 rounded-full cursor-pointer text-xl">Sign Up</button>
              <Link to="/login" className="submit bg-blue-700 text-white py-3 px-6 rounded-full cursor-pointer text-xl">Login</Link>
            </div>
          </div>
        </div>
        </form>
      </div>
    </>
  );
}

export default Register;
