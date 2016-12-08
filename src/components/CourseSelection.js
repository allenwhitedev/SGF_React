import React, { Component } from 'react'

class CourseSelection extends Component
{
  constructor(props)
	{
		super(props)

	  this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleOnRemove = this.handleOnRemove.bind(this)
    this.handleSubmitCourses = this.handleSubmitCourses.bind(this)
    this.state = {courses: [], newCourse: ""}
	}

  handleSubmitCourses(event)
  {
    alert("Submit Courses, assuming for now submit was successful")
  }

  handleOnRemove(event)
  {
    let index = event.target.id
    this.state.courses.splice(index, 1)
    this.setState(this.state)
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
    let submitButton = null

    (this.state.courses.length > 0)
    ?
      submitButton = <button className="submitButton textCenter">
        Take Me To Groups
      </button>
    :
      submitButton = <button className="submitButton textCenter" disabled="true" onSubmit={this.handleSubmitCourses}>
        Take Me To Groups
      </button>

    let courses = this.state.courses

    // courses is object currently being mapped, index is position of current object in its array
    let coursesDisplay = courses.map( (courses, index) =>
      <li key={index} className="course">
        {courses}
        <a className="remove-course" id={index} onClick={this.handleOnRemove}>✖</a>
      </li>
    )

    return(
      <section className="courseSelection">

        {/* Course Display */}
        <ul className="courses textCenter"> {coursesDisplay} </ul>

        {/* New Course Form */}
        <form className="newCourseForm textCenter" onSubmit={this.handleOnSubmit} id="signIn">
          <input className="newCourseInput textCenter" value={this.state.newCourse} onChange={this.handleOnChange} type="text" name="newCourse" placeholder="enter course"/>
        </form>
        {submitButton}
      </section>
    )
  }
}

export default CourseSelection
