
import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';
import {BrowserRouter, Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<Login></Login>} ></Route>
      <Route path='/SignUp' element={<SignUp></SignUp>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
