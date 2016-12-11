import React, { Component } from 'react'

import gravatar1 from '../img/gravatar1.png'
import gravatar2 from '../img/gravatar2.png'
import gravatar3 from '../img/gravatar3.png'
import gravatar4 from '../img/gravatar4.png'
import gravatar5 from '../img/gravatar5.png'

class Group extends Component
{
  constructor(props)
  {
    super(props)
    console.log("this.props.params.groupName", this.props.params.groupName)

    this.state = {mGroupName: this.props.groupName, reminders: [], }
  }

  displayAction(action)
  {
    if (action.type === "join")
      return <li> Return type from displayAction </li>
  }

  getGravatar(gravatar)
  {
    if (gravatar === "gravatar1")
      return gravatar1
    else if (gravatar === "gravatar2")
      return gravatar2
    else if (gravatar === "gravatar3")
      return gravatar3
    else if (gravatar === "gravatar4")
      return gravatar4
    else if (gravatar === "gravatar5")
      return gravatar5                      
  }

  render()
  {
      let dummyGroups = [
      {
        _id: "a83jgdfsdf",
        "name": "Super Studiers",
        "class": "CEN4010",
        "description": "We're the best at studying, trust us",
        members: ["a83jsj9lsdfj", "b38k2jf0jjsdf"],
        meetingTimes: ["Mon 11:30am, Wed 12:30pm"],
        locationName: "EE 106",
        location: ["lat": 33.556828283, "lng": -77.596928386],
        gravatar: "gravatar1",
        lastActivityAt: "ISODate(2016-11-26T00:32:48.745Z)",
        createdAt: "ISODate(2016-11-26T00:32:48.745Z)"
      },
      {
      _id: "b2j5k3k4j3",
      "name": "Most Valuable Studiers",
      "class": "CEN4010",
      "description": "We are all MVPs of getting good grades",
      members: ["a83jsj9lsdfj", "c4j2jckdjdj2"],
      meetingTimes: ["Tues 9:15am, Thurs 1:00pm"],
      locationName: "EE 106",
      location: ["lat": 33.556828283, "lng": -77.596928386],
      gravatar: "gravatar2",
      lastActivityAt: "ISODate(2016-15-26T00:32:48.745Z)",
      createdAt: "ISODate(2016-10-22T00:32:48.745Z)"
      },
      {
      _id: "cas2j3k4j3",
      "name": "Sleepy Students And Staff",
      "class": "COP4020",
      members: ["a83jsj9lsdfj", "c4j2jckdjdj2"],
      meetingTimes: ["Tues 11:15am, Thurs 3:00pm"],
      locationName: "EE 106",
      location: ["lat": 33.556828283, "lng": -77.596928386],
      gravatar: "gravatar3",
      lastActivityAt: "ISODate(2016-15-26T00:32:48.745Z)",
      createdAt: "ISODate(2016-10-22T00:32:48.745Z)"
      },
      {
      _id: "d3j5k3k4j3",
      "name": "Futbol Fans",
      "class": "COP4020",
      members: ["Tues 3:30pm, Fri 8:30am"],
      meetingTimes: ["ISODate(2016-14-04T03:03:05.908Z)"],
      locationName: "EE 106",
      location: ["lat": 33.556828283, "lng": -77.596928386],
      gravatar: "gravatar4",
      lastActivityAt: "ISODate(2016-15-26T00:32:48.745Z)",
      createdAt: "ISODate(2016-10-22T00:32:48.745Z)"
      },
      {
      _id: "e25jk3k4j3",
      "name": "Crazy Kids",
      "class": "COP4020",
      members: ["a83jsj9lsdfj", "c4j2jckdjdj2"],
      meetingTimes: ["Sat 12:00am, Sun 1:00pm"],
      locationName: "EE 106",
      location: ["lat": 33.556828283, "lng": -77.596928386],
      gravatar: "gravatar5",
      lastActivityAt: "ISODate(2016-15-26T00:32:48.745Z)",
      createdAt: "ISODate(2016-10-22T00:32:48.745Z)"
      },
    ]

    // find group from groupName param
    let group = null
    for (let i in dummyGroups)
      if ( dummyGroups[i].name === this.props.params.groupName )
        group = dummyGroups[i]

    let memberNames = ["Brandon", "Danh", "David", "Elizabeth", "Newil"]
    let members = null || group.members
    let membersDisplay = members.map( (member, index) => 
      <li key={index} className="groupMember"> {memberNames[index]}</li>  
    )

    let groupActions = 
    [
    {type: "file", subtype: "doc", text: "Aly 33 shared studyGuide1.doc"}, 
    {type: "meetup", text: "BillyT requested a meetup@ Tues 4:30pm"}, 
    {type: "join", text: "Eli4fun joined Most Valuable Study"}
    ]
    let groupActionsDisplay = groupActions.map( (action, index) => 
      <li key={index} className="action">{action.text}</li>
    )

    return(
      <div>

        {/* Sidebar */}
        <section className="sidebar textCenter">
          <br />
          <h1 className="textCenter sidebarTitle">{ abbreviateString(group.name) }</h1>
          <img className="profileGravatar" src={this.getGravatar(group.gravatar)} alt="{group.name}" />

          <h2 className="textCenter">Reminders</h2>   
            <h4 className="reminder">No Reminders For {abbreviateString(group.name)}</h4>
          
          <h2 className="textCenter">Members</h2> 
          <ul className="groupMembers">
            {membersDisplay}
          </ul>
        </section>

        {/* Main */}
        <main className="sidebarMain textCenter">
           <h1 className="">Recent Activity</h1>
           <ul className="groupActions">{groupActionsDisplay}</ul>

            <h1 className="">Meetup 1 <img src="//ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_document_x16.png" alt="gdoc"/></h1>
             <h1 className="">Meetup 2</h1>

              <h1 className="">Files</h1>
               <h1 className="">Chat</h1>
        </main>

      </div>
    )
  }
}


function abbreviateString(stringToBeAbbreviated)
{
  if (stringToBeAbbreviated.length > 15)
  {
    let abbreviatedString = ""

    abbreviatedString += stringToBeAbbreviated[0]

    // when an empty space is found add the next letter to abbreviated string
    for (let i = 1; i < stringToBeAbbreviated.length; i++)
        if ( stringToBeAbbreviated[i] === " " && stringToBeAbbreviated[i + 1] )
            abbreviatedString += stringToBeAbbreviated[i + 1]

    return abbreviatedString
  }
  else // string is not too long, do not abbreviate
    return stringToBeAbbreviated
}

export default Group
