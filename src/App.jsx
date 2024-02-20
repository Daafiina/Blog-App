import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import BlogList from './Components/Blogs/BlogList';
import BlogDetail from './Components/Blogs/BlogDetail';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import About from './Components/About/About';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ margin: 'auto', height: 'auto' }}>
      <ToastContainer />
      <Router>
        <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog-detail/:id" component={BlogDetail} />
          <Route path="/register" component={Register} />
          <Route path="/login" render={(props) => <Login {...props} handleLogin={handleLogin} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
