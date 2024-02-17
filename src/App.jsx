import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Home from './pages/Home'

function App() {
  

  return (
    <>
      <Header/>
      <br></br>
      <br></br>
      <br></br>
      <Outlet/>
      
      {/* <div className='bg-indigo-600 w-full h-screen'></div> */}
      
    
    </>
    
  )
}

export default App
