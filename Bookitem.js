import React from 'react'
import './Header.css'
const Bookitem=({book})=>
{
    
    return (
    <div className="item">
        <img src={book.imageLinks.thumbnail}/>
        <br/>
        <div className="content">
        Author:{book.authors.[0]}<br/>
        Title{book.title}
        </div>
        </div>
    )
}
export default Bookitem;