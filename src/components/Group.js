import React, { Component } from 'react'
import Request from 'superagent'

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

    this.state =
    {
      group: { name: "", members: [], meetingTimes: [], actions: [] },
      mGroupName: this.props.groupName,
      reminders: []
    }
  }

  componentDidMount()
  {
    let url = "https://sgf-api.herokuapp.com/groups/" + this.props.params.groupName
    this.fetchGroupFromURL(url)
  }

  displayAction(action)
  {
    if (action.type === "join")
      return <li> Return type from displayAction </li>
  }

  fetchGroupFromURL(url)
  {
    Request.get(url).then( (response) =>
    {
      this.setState({ group: JSON.parse( response.text) })
    })
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

    let memberNames = ["Brandon", "Danh", "David", "Elizabeth", "Newil"]
    let members = null || this.state.group.members
    let membersDisplay = members.map( (member, index) =>
      <li key={index} className="groupMember"> {memberNames[index]}</li>
    )

    let groupActions =
    [
      {type: "file", subtype: "doc", text: "Brandon shared studyGuide1.doc"},
      {type: "meetup", text: "Brandon requested a meetup@ Tues 4:30pm"},
      {type: "join", text: "Danh joined Most Valuable Study"}
    ]

    let groupActionsDisplay = groupActions.map( (action, index) =>
      <li key={index} className="action lightGreyText">{action.text}</li>
    )

    let meetupDisplay = this.state.group.meetingTimes.map( (meetingTime, index) =>
      <li key={index} className="meetup boxShadow1">

        <section className="groupTextInfo">
          <h2 className="meetupName verticalAlignFlex"> <i className="material-icons marginRight10px meetupIcon">event</i> <span> Meetup {index + 1} </span> </h2>
        </section>

        <ul className="groupInfo margin0 tabPlusOnly fullWidth flexHorizontalLayout" id="">
          <li className="groupMembers verticalAlignFlex"> <i className="material-icons">group</i> &nbsp; {this.state.group.members.length} members </li>
          <li className="meetingTimes verticalAlignFlex"> <i className="material-icons">access_time</i> &nbsp; {meetingTime} </li>
          <li className="locationName verticalAlignFlex">
            <i className="material-icons">place</i> &nbsp;
            <span className="whiteText"> {this.state.group.locationName} </span>
          </li>
        </ul>
      </li>
    )

    return(
      <div>

        {/* Sidebar */}
        <section className="sidebar textCenter">
          <br />
          <h1 className="textCenter sidebarTitle">{ abbreviateString(this.state.group.name) }</h1>
          <img className="profileGravatar" src={this.getGravatar(this.state.group.gravatar)} alt="{this.state.group.name}" />

          <h2 className="textCenter">Reminders</h2>
            <h4 className="reminder">No Reminders For {abbreviateString(this.state.group.name)}</h4>

          <h2 className="textCenter">Members</h2>
          <ul className="groupMembers">
            {membersDisplay}
          </ul>
        </section>

        {/* Main */}
        <main className="sidebarMain textCenter">
          <h1 className="">Recent Activity</h1>
          <ul className="groupActions">{groupActionsDisplay}</ul>

          {meetupDisplay}
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
