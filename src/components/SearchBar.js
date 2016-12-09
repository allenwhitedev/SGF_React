import React, { Component } from 'react'

class SearchBar extends Component
{
    //each class component has it's own initial "state"
    constructor (props)
    {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.state = {term: ''};
    }

    handleInputChange(event)
    {
        this.setState({term: event.target.value});
    }

    handleOnSubmit(event)
    {
      alert("Search for Groups with this term")
    }

    render()
    {
        return (
            <div className="search-bar">
                <input onSubmit={this.handleOnSubmit} value = {this.state.term} onChange={this.handleInputChange}/>
            </div>
        )
    }
}

export default SearchBar
