import React, { Component } from 'react'

class Groups extends Component
{

  render()
  {

    let dummyGroups = [
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

    let groupsDisplay = dummyGroups.map((dummyGroups,index) =>
      <div key={index} className="group-searched">
        {dummyGroups.name}<br/>
        <section>
          <img src='http://image.flaticon.com/icons/png/512/27/27825.png' alt="" height="15" width="15"/> {dummyGroups.members.length} members<br/>
          {dummyGroups.meetingTimes}<br/>
          {dummyGroups.locationName}<br/>
        </section>
      </div>
    )

    return(
      <div>
        {groupsDisplay}
      </div>
      // Groups Display
    )
  }
}

export default Groups
