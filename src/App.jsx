
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './Components/About/About';


function App() {
  

  return (
    <>
    <Router>
    <Header/>
    <br/>
    <br/>
    <br/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        {/* <Route path="/contact" component={Contact} /> */}
      </Switch>
    </Router>
      
      <br></br>
      <br></br>
      <br></br>
    
      
      {/* <div className='bg-indigo-600 w-full h-screen'></div> */}
      
    
    </>
    
  )
}

export default App
