import React from 'react';
import user_icon from '../../assets/person.png';
import password_icon from '../../assets/password.png';
import background_image from '../../assets/BlogPhoto.jpeg';
import {useState,useEffect} from 'react' 
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

export const logout = () => {
    // Perform logout actions, such as clearing session storage, removing tokens, etc.
    sessionStorage.removeItem('username');
    // Redirect the user to the login page or any other desired location
    window.location.replace('/login');
  };

function Login() {
    
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const history = useHistory();

  
  

  useEffect(() => {
    sessionStorage.clear();
  },[])

  const ProceedLogin = (e) =>{
    e.preventDefault();
    if(validate()){
        fetch("http://localhost:8000/user/"+username).then((res) => {
            return res.json();
        }).then((resp) => {
            console.log(resp);
            if(Object.keys(resp).length===0){
                toast.error('Please enter valid username')
            }else{
                if(resp.password===password){
                    toast.success('Success');
                    sessionStorage.setItem('username',username);
                    history.push('/');
                }else{
                    toast.error('Please enter valid credentials')
                }
            }
        }).catch((err) => {
            toast.error('Login Failed due to:' +err);
        })
    }
  }

  const validate = () => {
        let result = true;
        if(username === '' || username === null){
            result=false;
            toast.warning('Please enter username!')

        }
        if(password === '' || password === null){
            result=false;
            toast.warning('Please enter password!')

        }
        return result;
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${background_image})`, filter: 'blur(2px)', zIndex: -1 }}></div>
      <form onSubmit={ProceedLogin}>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white max-w-lg mx-auto p-10 rounded-lg shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
          <div className="text-center text-4xl font-bold mb-6">Login </div>
          <div className="inputs">
            <div className="input flex items-center border-b-2 border-gray-300 mb-6">
              <img src={user_icon} alt="" className="mr-4 w-6 h-6" />
              <input value={username} onChange={e => setUsername(e.target.value)} type="text" className="focus:outline-none w-full bg-transparent text-white text-xl" placeholder="Username" style={{ color: 'white' }} />
            </div>
            <div className="input flex items-center border-b-2 border-gray-300 mb-6">
              <img src={password_icon} alt="" className="mr-4 w-6 h-6" />
              <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="focus:outline-none w-full bg-transparent text-white text-xl" placeholder="Password" style={{ color: 'white' }} />
            </div>
          </div>
          <div className="text-lg text-gray-600 mb-6">Forgot password? <span className="text-blue-500">Click here!</span></div>
          <div className="submit-container flex justify-between">
             <button type="submit" className="submit bg-blue-700 text-white py-3 px-6 rounded-full cursor-pointer text-xl">Login</button>
          </div>
             <div className="text-lg text-gray-600 mb-6">
                Are you new? 
                    <Link to={'/register'} className="text-blue-500">
                        Click here to Register!
                    </Link>
            
            </div>
            </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
