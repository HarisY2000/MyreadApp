import React from 'react'
import './Header.css'
import Searchbar from './MyComponents/Searchbar'
import axios from 'axios'
import Booklist from './Booklist'
class Header extends React.Component
{
    state={books:[]};
 onSearchSubmit=async term=>
{
    const response=await axios.get("https://reactnd-books-api.udacity.com/books",{
        params:{query:term},
        headers:{
            Authorization:Math.random().toString(36).substr(-8)
        }

    }); 
    this.setState({books:response.data.books});
};

render(){
return(
    <div style={{backgroundColor:'green',height:80}}> 
    <label className="label" htmlFor="name">
     MyReads
    </label>
    <a className="nav-link" href="#">Search Page</a>
    <Searchbar onSubmitform={this.onSearchSubmit}/>
    <Booklist books={this.state.books}/>
    </div>
    );


}
}


export default Header;