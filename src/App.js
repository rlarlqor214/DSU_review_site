import './App.css';
import Main from './components/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Signin}></Route>
                    <Route path="/Main" Component={Main}></Route>
                    <Route path="/signup" Component={Signup}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
