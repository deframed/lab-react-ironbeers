import React, { Component } from 'react';
import './App.css';
// import axios from 'axios'
import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import Header from './components/Header';



class App extends Component {

  render() {

   

    return(
      <div>
        <Header />

        <Switch>
        
        <Route exact path="/" render={()=>{
           return <Home/>
          }}/>
          <Route path="/beers" render={()=>{
            return  <Beers/>
          }}/>
         <Route path="/randombeers" render={()=>{
            return  <RandomBeer/> 
          }}/>
          <Route path="/beers" render={()=>{
            return  <NewBeer/>
          }}/>
          <Route path="/beers/:singleBeer._id" render={()=>{
            return <singleBeer/> 
          }}/>

          

        </Switch>
        
          
  
      </div>

    )
  }
}

export default App;

