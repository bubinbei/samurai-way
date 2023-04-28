import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';


function App() {
    // @ts-ignore
    return (
      <BrowserRouter>
        <div className="App-wrapper">
            <Header/>
            <Nav/>
            <div className='App-wraper-content'>
              <Route path='/dialog' component={Dialogs}/>
              <Route path='/profile' component={Profile}/>
              <Route path='/news' component={News}/>
              <Route path='/music' component={Music}/>
              <Route path='/setting' component={Setting}/>
            </div>
        </div>
      </BrowserRouter>
    );
}

export default App;
