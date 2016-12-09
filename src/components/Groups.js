import React, { Component } from 'react'

class Groups extends Component
{
  constructor(props)
	{
		super(props)

    this.state = {groups: ""}
	}

  groupSearch(event)
  {
    // YTSearch({
    //     key: API_KEY, term: term }, (videos) => {
    //     this.setState({
    //         videos: videos,
    //         selectedVideo: videos[0]
    //     });
    // });
  }

  render()
  {
    let userGroups =     [
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

    let userGroupDisplay = userGroups.map( (userGroups, index) =>
      <li key={index} className="userGroups">
        <h1>{userGroups.name}</h1>
        <p>{userGroups.members.length} members</p>
      </li>
    )

    return(
      <section className="courseSelection">

        {/* Searched Group Display */}
        <ul className="groups textCenter"> {userGroupDisplay} </ul>

        {/* Display User Info component */}
      </section>
    )
  }
}

export default Groups
