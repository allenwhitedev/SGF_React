import React, { Component } from 'react'

class CourseForm extends Component
{
  constructor(props)
	{
		super(props)

	  this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.state = {courses: ""}
	}

  handleOnChange(event)
  {
    this.setState({courses: event.target.value})
  }

  handleOnSubmit()
  {
    alert("Needs to push to courses")
  }

  render()
  {
    return(
      <form onSubmit={this.handleOnSubmit} id="signIn">
          <input value={this.state.courses} onChange={this.handleOnChange} type="text" name="courses" placeholder="enter course"/>
      </form>
    )
  }
}

export default CourseForm
