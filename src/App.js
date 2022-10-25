import logo from './logo.svg';
import './App.css';
import SplashScreen from './pages/SplashScreen';
import SignUp from './pages/Signup';
import {useState, useEffect} from "react"



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
