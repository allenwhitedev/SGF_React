import React, { Component } from 'react'

class CourseSelection extends Component
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
    let courses = this.state.courses

    // course is object currently being mapped, index is position of current object in its array
    let coursesDisplay = courses.map( (course, index) => 
      <li key={index} className="course"> {course} </li>
    )

    return(
      <section className="courseSelection">

        {/* Course Display */}
        <ul className="courses textCenter"> {coursesDisplay} </ul>
        
        {/* New Course Form */}
        <form className="newCourseForm textCenter" onSubmit={this.handleOnSubmit} id="signIn">
          <input className="newCourseInput textCenter" value={this.state.newCourse} onChange={this.handleOnChange} type="text" name="newCourse" placeholder="enter course"/>
        </form>
      </section>
    )
  }
}

export default CourseSelection
