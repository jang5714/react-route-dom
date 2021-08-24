import React from "react"
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import OnlineProfile from './components/OnlineProfile';
import Join from './components/Join';
import Login from './components/Login';
import School from './components/School';
import CourseRegistar from './components/CourseRegistar';
import Time from './components/Time'
import Navigation from "./components/Navigation";

const App  = () => (
  <>
    <Navigation/>
    <switch>
    <Route exact path='/' component= {Time}/>
    <Redirect from='/time' to ={'/'}/>
    <Route exact path='/online-profile' component={OnlineProfile}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/join' component={Join}/>
    <Route exact path='/school' component={School}/>
    <Route exact path='/course-registar' component={CourseRegistar}/>
    
    </switch>
    </>
    
)

export default App; //retrun에 해당된다.
