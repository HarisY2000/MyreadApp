import './App.css';
import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Todos from './Todos';
import Wantread from './Wantread';
import Currentlyread from './Currentlyread'
import Footer from './Footer'
class App extends React.Component{
  render() {
  return(
    <div className="Myreadapp">
      <Header/>  
      
      <Footer/>


    </div>
  

  ); 

  };
  
}


  export default App;
