import React, { Component } from 'react'

import gravatar1 from '../img/gravatar1.png'
import gravatar2 from '../img/gravatar2.png'
import gravatar3 from '../img/gravatar3.png'
import gravatar4 from '../img/gravatar4.png'
import gravatar5 from '../img/gravatar5.png'

//import { Link } from 'react-router'
import { Router, Route, Link, browserHistory } from 'react-router'

class Groups extends Component
{

  constructor(props)
  {
    super(props)

    this.handleClickGroup = this.handleClickGroup.bind(this)

    this.state = {myGroups: [], groupsHere: [
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
    ] }
  
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

  formatDate(date) 
  {
    let formattedDate = ""
    formattedDate
  }

  addMyGroup()
  {

  }

  handleClickGroup(name)
  {
    console.log("group to add name:", name)

    let tmpGroups = this.state.myGroups
    let tmpGroupsHere = this.state.groupsHere
    
    // insert user if they are not already in the group
    if ( tmpGroupsHere[name.index].members.indexOf("basidjfkdkdf") === -1 )
      tmpGroupsHere[name.index].members.push("basidjfkdkdf")

    console.log("tmpGroupsHere", tmpGroupsHere)
    
    for (let i = 0; i < tmpGroups.length; i++)
      if ( tmpGroups[i].name === name.name )
        return
      
    tmpGroups.push(name)

    this.setState((prevState, props) => ({
      myGroups: tmpGroups, groupsHere: tmpGroupsHere
    }))

    console.log("state.groupsHere[0]", this.state.groupsHere[0])

  }


  render()
  {

    let myGroupsDisplay = null

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


    let groupsDisplay = this.state.groupsHere.map((dummyGroups,index) =>
      <li key={index} className="group boxShadow1" id={index} onClick={ () => this.handleClickGroup({name: dummyGroups.name, class: dummyGroups.class, index: index}) }>
        <section className="groupTextInfo"> 
          <Link to={"groups/" + dummyGroups.name} params={ {groupName: dummyGroups.name} }>
          <h2 className="groupName verticalAlignFlex"> <img className="gravatarSmall marginRight10px" src={this.getGravatar(dummyGroups.gravatar)} alt=""/> <span> {dummyGroups.name} - {dummyGroups.class} </span> </h2>
          <h3>{dummyGroups.description}</h3>
          </Link>
        </section>

        <ul className="groupInfo tabPlusOnly fullWidth flexHorizontalLayout" id="">
          <li className="groupMembers verticalAlignFlex"> <i className="material-icons">group</i> &nbsp; {dummyGroups.members.length} members </li>
          <li className="meetingTimes verticalAlignFlex"> <i className="material-icons">access_time</i> &nbsp; {dummyGroups.meetingTimes} </li>
          <li className="locationName verticalAlignFlex"> 
            <i className="material-icons">place</i> &nbsp;
            <span> {dummyGroups.locationName} </span> 
          </li>
        </ul>
      </li>
    )

    let myGroups = this.state.myGroups.map( (myGroup, index) =>
      <li key={index} className="myGroup textCenter">
        {myGroup.name} ({myGroup.class})
        <br />
      </li>
    )

    return(
     
      <div>
        {/* Sidebar */}
        <section className="sidebar textCenter">
          <br />
          <h1 className="textCenter sidebarTitle">Brandon34</h1>
          <img className="profileGravatar" src={gravatar1} />

          <h2 className="textCenter"><strong>Reminders</strong></h2>   
            <h4 className="reminder">No Reminders At This Time</h4>
          
          <h2 className="textCenter"><strong>My Groups</strong></h2> 
          <ul className="myGroups">
            {myGroups}
          </ul>
        </section>

        {/* Groups Display */}
        <ul className="groups">
           <h1 className="textCenter">Groups </h1>
            {groupsDisplay}
        </ul>
      </div>
     
    )
  }
}

export default Groups
