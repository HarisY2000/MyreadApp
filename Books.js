import React,{Component} from 'react'
import Searchbar from './MyComponents/Searchbar'
import request from 'superagent'
class Book extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            books:[],
            searchfield:''
        }
    }
    searchbook=(e)=>
    {
        e.preventDefault();
        request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({q: this.searchfield})
        .then((data)=>{
            console.log(data);
        })

    }
    handleSearch=(e)=>
    {
        this.setState({searchfield: e.target.value})
    }
    render()
    {
        return(
        <div>
            <Searchbar searchbook={this.searchbook} handleSearch={this.handleSearch}/>
        </div>

        )
    }
}
export default Book;