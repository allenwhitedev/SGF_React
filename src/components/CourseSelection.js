import React, { Component } from 'react'

class CourseSelection extends Component
{
  constructor(props)
	{
		super(props)

		this.handleOnChangeCourse = this.handleOnChangeCourse.bind(this)
    this.handleInputCourse = this.handleInputCourse.bind(this)

    this.state = {courses:""}
	}

  handleInputCourse()
  {
    alert("Course added")
  }

  handleOnChangeCourse(event)
  {
    this.setState({courses: event.target.value})
  }

  // handleInputCourse()
  // {
  //   this.setState((prevState) => ({courses: prevState.courses.push(newCourse)})))
  // }

  render()
  {
    let newCourse = null;
    let displayCourse = <DisplayCourse/>;
    let courseForm = <CourseInput />

    return (
      <div className="courseSelection textCenter">
        <h1>CourseSelection</h1>
        <h2>What classes are you taking?</h2>
        {displayCourse}
        {courseForm}
      </div>
    )
  }

}

function CourseInput(props)
{
  return (
    <div>Render Course Input</div>
  )
}

function DisplayCourse(props)
{
	return (
    // Needs to render Courses
    <div>Courses Displayed Here</div>
	)
}

export default CourseSelection
