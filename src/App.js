import './App.css';
import Main from './components/main';
import { Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" Component={Signin}></Route>
                <Route path="/Main" Component={Main}></Route>
                {/* <Route path="/Signup" Component={Signup}></Route> */}
            </Routes>
        </div>
    );
}

export default App;
