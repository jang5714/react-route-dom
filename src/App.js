import React from "react"
import { Route, Redirect, Switch } from 'react-router-dom'
// import './App.css';
import OnlineProfile from './components/OnlineProfile';
import Join from './components/Join';
import Login from './components/Login';
import School from './components/School';
import CourseRegistar from './components/CourseRegistar';
import Time from './components/Time'
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Aside from "./components/Aside";
import NavigationForJavaScript from "./components/NavigationForJavaScript"
import Basic from "./moden-javascript/chap-01-basic/basic";
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
import HomePage from "./pages/HomePage";

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
    <Route exact path='/course-registar' component={CourseRegistar}/>

    <Route exact path='/basic' component={Basic}/>
    {/* <Route exact path='/arrow-funtion' component={ArrowFuntion}/>
    <Route exact path='/argument' component={Argument}/>
    <Route exact path='/template-literal' component={Templateliteral}/>
    <Route exact path='/lieral-method' component={Literalmethod}/>
    <Route exact path='/destructuring' component={Destructuring}/>
    <Route exact path='/loop' component={Loop}/>
    <Route exact path='/array-method' component={Arraymethod}/>
    <Route exact path='/spread-operator' component={Spreadoperator}/>
    <Route exact path='/object-literal' component={Objectliteral}/>
    <Route exact path='/simbol' component={Simbol}/>
    <Route exact path='/class' component={Class}/>
    <Route exact path='/promise' component={Promise}/>
    <Route exact path='/generator' component={Generator}/>
    <Route exact path='proxy' component={Proxy}/>
    <Route exact path='/set-map' component={Setmap}/>
    <Route exact path='/array' component={Array}/>
    <Route exact path='/es2017' component={Es2017}/>
    <Route exact path='/async-await' component={Asyncawait}/>
    <Route exact path='/es2018' component={Es2018}/>
    <Route exact path='/es2019' component={Es2019}/>
    <Route exact path='/es2020' component={Es2020}/>    
    <Route exact path='/typescript' component={Typescript}/>     */}
    </Switch></>
)

export default App; //retrun에 해당된다.
