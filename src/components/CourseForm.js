import React, { Component } from 'react'

class CourseForm extends Component
{
  constructor(props)
	{
		super(props)

	  this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.state = {courses: [], newCourse: ""}
	}

  handleOnChange(event)
  {
    this.setState({newCourse: event.target.value})
  }

  handleOnSubmit(event)
  {
    event.preventDefault()
    
    // adds new course to courses, reset newCourse state
    this.setState({ courses: this.state.courses.concat(this.state.newCourse), newCourse: "" })
  }

  render()
  {
    return(
      <form className="newCourseForm textCenter" onSubmit={this.handleOnSubmit} id="signIn">
        <input className="newCourseInput textCenter" value={this.state.newCourse} onChange={this.handleOnChange} type="text" name="newCourse" placeholder="enter course"/>
      </form>
    )
  }
}

export default CourseForm
