import React from 'react'

class Searchbar extends React.Component
{
    state={term:''};
    onSubmitform = event =>
    {
        event.preventDefault();
         this.props.onSubmitform(this.state.term)
 
    }
render(){
    return(

    <div className="bar">
        <form onSubmit={this.onSubmitform}>
        <input className="form-control form-control-sm" type="text" placeholder="Search" aria-label=".form-control-sm example"
        value={this.state.term} 
        onChange={e=>this.setState({term: e.target.value})}
        />
        </form>
    </div>
)
    }
}
export default Searchbar;