import React from "react"
import { Route, Redirect, Switch } from 'react-router-dom'
// import './App.css';
import {OnlineProfile, Join, Login, School, CourseRegistar, Navigation, Header, NavigationForJavaScript} from './components/index';
import Time from './components/Time'
import ArrowFuntion from "./moden-javascript/chap-22-es2020/Es2020";
import Argument from "./moden-javascript/chap-03-argument/Argument"
import Templateliteral from "./moden-javascript/chap-04-template-literal/Templateliteral"
import Literalmethod from "./moden-javascript/chap-05-literal-method/Literalmethod"
import Destructuring from "./moden-javascript/chap-06-destructuring/Destructuring"
import Loop from "./moden-javascript/chap-07-loop/Loop"
import Arraymethod from "./moden-javascript/chap-08-array-method/Arraymethod"
import Spreadoperator from "./moden-javascript/chap-09-spread-operlator-rest-parameter/Spreadoperator"
import Objectliteral from "./moden-javascript/chap-10-object-literal/Object-literal"
import Simbol from "./moden-javascript/chap-11-simbol/Simbol"
import Class from "./moden-javascript/chap-12-class/Class"
import Promise from "./moden-javascript/chap-13-promise/Promise"
import Generator from "./moden-javascript/chap-14-generator/Generator"
import Proxy from "./moden-javascript/chap-15-proxy/Proxy"
import Setmap from "./moden-javascript/chap-16-set-map/Setmap"
import Array from "./moden-javascript/chap-17-array/Array"
import Es2017 from "./moden-javascript/chap-18-es2017/Es2017"
import Asyncawait from "./moden-javascript/chap-19-async-await/Asyncawait"
import Es2018 from "./moden-javascript/chap-20-es2018/Es2018"
import Es2019 from "./moden-javascript/chap-21-es2019/Es2019"
import Es2020 from "./moden-javascript/chap-22-es2020/Es2020"
import Tyescript from "./moden-javascript/chap-23-typescript/Typescript"
import {HomePage} from "./pages/index";

const App  = () => (
  <>
    <Header/>
    <Navigation/>
    <NavigationForJavaScript/>
    <Switch>
    <Route exact path='/' component= {HomePage}/>
    <Redirect from='/home-page' to ={'/'}/>
    <Route exact path='/online-profile' component={OnlineProfile}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/join' component={Join}/>
    <Route exact path='/school' component={School}/>
    <Route exact path='/school' component={School}/>
    <Route exact path='/course-registar' component={CourseRegistar}/>
  
    </Switch></>
)

export default App; //retrun에 해당된다.
