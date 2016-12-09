import React, { Component } from 'react'

class Group extends Component
{
  constructor(props)
  {
    super(props)

    this.state = {mGroupName: this.props.groupName, reminders: [], }
  }

  render()
  {
    let user = {
      _id: "fj8302j0fh0sdfhj",
      "name": "JohnnyB12",
      password: "password1234",
      gravatar: "gravatar2",
      createdAt: "ISODate(2016-11-26T00:32:48.745Z)",
      reminders: ["Most Valuable Codes Exam Review"]
    }

    let userGroups = [
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

    let userReminders = user.reminders

    let userGroupDisplay = userGroups.map( (userGroups, index) =>
      <div key={index} className="userGroups">
        <div>{abbreviateString(userGroups.name)}</div>
        <div>{userGroups.members.length} Members</div>
      </div>
    )

    return(
      <div>
        <h2>Group {this.props.params.groupName}</h2>

        {user.gravitar}<br/>
        <div>
          Reminders
          <div>
            {userReminders}
          </div>
        </div>
        <div>
          My Groups
          <div className="userGroups"> {userGroupDisplay} </div>
        </div>
      </div>
    )
  }
}


function abbreviateString(stringToBeAbbreviated)
{
    let abbreviatedString = ""

    abbreviatedString += stringToBeAbbreviated[0]

    // when an empty space is found add the next letter to abbreviated string
    for (let i = 1; i < stringToBeAbbreviated.length; i++)
        if ( stringToBeAbbreviated[i] === " " && stringToBeAbbreviated[i + 1] )
            abbreviatedString += stringToBeAbbreviated[i + 1]

    return abbreviatedString
}

export default Group
