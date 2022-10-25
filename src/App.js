import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
git 
=======
import SplashScreen from './pages/SplashScreen';
import SignUp from './pages/Signup';
import {useState, useEffect} from "react"


>>>>>>> a18d7983926a05666e6cff6e2e1a432044731a1e

function App() {

  const[showScreen, setShowScreen] = useState(true)
  
  const timer = setInterval(() => {return ;}, 4000)

  useEffect(() => {

    async function work(){
      await timer;
      setShowScreen(false)
    }
    work()
  }, [])

  return (
     <div className="vwot-50 mx-md-auto border vh-100">
      {showScreen ? <SplashScreen />: <SignUp />}
    </div>
  );
}

export default App;
