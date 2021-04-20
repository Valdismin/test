import React from 'react';
import './App.css';
import {Footer} from './components/Footer/Footer';
import {Header} from './components/Header/Header';
import {Navigation} from "./components/Navigation/Navigation";
import {Routes} from './components/Routes/Routes';

function App() {
    return <div className='app-wrapper'>
        <Header/>
        <Navigation/>
        <div className='app-wrapper-content'>
            <Routes/>
        </div>
        <Footer/>
    </div>
}

export default App;
