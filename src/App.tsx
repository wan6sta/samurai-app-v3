import './App.scss'


import {useState} from "react";

import LoginPage from "./pages/LoginPage/LoginPage";
import Header from "./components/Header/Header";

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(true)

  if (!isAuthorized) {
    return <LoginPage/>
  }

  return <div>
    <Header/>

  </div>
}

export default App