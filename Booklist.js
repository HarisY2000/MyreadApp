import React from 'react'
import Bookitem from './Bookitem'
const Booklist=({books})=>
{
    const renderedlist=books.map(book=>{
        return <Bookitem book={book}/>;
    })
    
    return <div className="center">{renderedlist}</div>
}
export default Booklist;