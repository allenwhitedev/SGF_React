import React, { Component } from 'react'
import { Link } from 'react-router'

class CourseSelection extends Component
{
  constructor(props)
  {
    super(props)

    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleOnRemove = this.handleOnRemove.bind(this)
    this.handleSubmitCourses = this.handleSubmitCourses.bind(this)

    let myGroups =
    [
      {
        _id: "a83jgdfsdf",
        "name": "Super Studiers",
        members: ["a83jsj9lsdfj", "b38k2jf0jjsdf"],
        meetingTimes: ["ISODate(2016-12-04T03:03:05.908Z)"],
        locationName: "EE 106",
        location: ["lat": 33.556828283, "lng": -77.596928386],
        gravatar: "gravatar3",
        lastActivityAt: "ISODate(2016-11-26T00:32:48.745Z)",
        createdAt: "ISODate(2016-11-26T00:32:48.745Z)"
      },
      {
      _id: "b2j5k3k4j3",
      "name": "Most Valuble Studiers",
      members: ["a83jsj9lsdfj", "c4j2jckdjdj2"],
      meetingTimes: ["ISODate(2016-14-04T03:03:05.908Z)"],
      locationName: "EE 106",
      location: ["lat": 33.556828283, "lng": -77.596928386],
      gravatar: "gravatar3",
      lastActivityAt: "ISODate(2016-15-26T00:32:48.745Z)",
      createdAt: "ISODate(2016-10-22T00:32:48.745Z)"
      }
    ]

    this.state = {courses: [], newCourse: "", groups: myGroups}
  }

  handleSubmitCourses(event)
  {
    alert("Submit Courses, assuming for now submit was successful")
  }

  handleOnRemove(event)
  {
    let index = event.target.id
    console.log("index", index)
    this.state.courses.splice(index, 1);
    this.setState(this.state);
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
    console.log(this.state.courses);
  }

  render()
  {
    let submitButton = null;

    (this.state.courses.length > 0)
    ? // true
      submitButton = <button className="groupsButton textCenter defaultButton boxShadow2">
        <Link to="/groups"> Go To Groups </Link>
      </button>
    : // false
      submitButton =
      <div>
        <h3 className="textCenter">*Add at least one course before proceeding</h3>
        <button className="groupsButton textCenter defaultButton boxShadow2 disabled" disabled="true" onSubmit={this.handleSubmitCourses}>
          Go To Groups
        </button>
      </div>

    let courses = this.state.courses

    // course is object currently being mapped, index is position of current object in its array
    let coursesDisplay = courses.map( (course, index) =>
      <li key={index} className="course">
        {course}
        <a className="remove-course" onClick={this.handleOnRemove}> <i className="material-icons" id={index}>close</i> </a>
      </li>
    )


    return(
      <section className="courseSelection">
        <br/> <br/>
        {/* Courses Display */}
        <ul className="courses textCenter"> {coursesDisplay} </ul>

        {/* New Course Form */}
        <form className="newCourseForm textCenter" onSubmit={this.handleOnSubmit} id="signIn">
          <section className="inputArea">
            <input className="newCourseInput textCenter" value={this.state.newCourse} onChange={this.handleOnChange} type="text" name="newCourse" placeholder="enter course"/>
          </section>
        </form>

        <footer className="submitButtonArea fullWidth textCenter">
          {submitButton}
        </footer>

      </section>
    )
  }
}

export default CourseSelection
