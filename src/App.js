
import './App.css';
import { Counter } from './components/Counter-UseState';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Home } from './components/Home/Home'
import { Login } from './components/Login/Login';
import { Error404 } from './components/Error404/Error404';


function App() {
  return (
    <>
      <header>
        <h1>Tienda de zapatos</h1>
      </header>
      <Routes>
        <Route path='/' element = { <Home />} />
        <Route path='app/counter-app' element = { <Counter initialValue={0} /> } />
        <Route path='login' element = { <Login /> } />
        <Route path='404' element = { <Error404 /> } />
        <Route path='/*' element = { <Navigate to="/" /> } />        
      </Routes>      
    </>         
  );
}

export default App;
