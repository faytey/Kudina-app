import logo from './logo.svg';
import './App.css';
import SplashScreen from './pages/SplashScreen';
import SignUp from './pages/Signup';
import {useState, useEffect} from "react"
import Dashboard from './pages/Dashboard';
import NavTab from './components/NavTab';
import AddUser from './pages/AddUser';



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
     <div className="vw-md-50 vh-100 mx-md-auto border bg-secondary">
      {/* {showScreen ? <SplashScreen />: <SignUp />} */}

    </div>
  );
}

export default App;
