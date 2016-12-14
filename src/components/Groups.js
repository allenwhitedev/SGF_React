import React, { Component } from 'react'

import Request from 'superagent'

import gravatar1 from '../img/gravatar1.png'
import gravatar2 from '../img/gravatar2.png'
import gravatar3 from '../img/gravatar3.png'
import gravatar4 from '../img/gravatar4.png'
import gravatar5 from '../img/gravatar5.png'

import { Link } from 'react-router'

class Groups extends Component
{

  constructor(props)
  {
    super(props)

    this.handleClickJoinGroup = this.handleClickJoinGroup.bind(this)

    this.state = {groups: [], myGroups: []}
  }

  componentDidMount()
  {
    let url = "https://sgf-api.herokuapp.com/groups/"
    this.requestGroupsFromURL(url) // get groups from backend
  }

  getLocalStorage(item)
  {
    if (item === "userGravatar")
      return this.getGravatar( localStorage.getItem(item) )
    return localStorage.getItem(item)
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

  handleClickJoinGroup(group)
  {
    console.log("group", group)

    let url = 'https://sgf-api.herokuapp.com/groups/' + group.groupId
    this.requestJoinGroup(url, group.groupId)
  }

  hideIfMember(group)
  {
    console.log('hideIfMember', group.members)
    console.log('userId', localStorage.getItem('userId'))
    if ( group.members.indexOf( localStorage.getItem('userId') ) !== -1 ) 
      return "hideDisplayNone"
    else
      return "dontHide"

  }

  requestGroupsFromURL(url)
  {
    //Grabs the data inputted in url, the response is put through JSON formatting,
    //then set to groups
    Request.get(url).then( (response) => {
      this.setState({groups: JSON.parse( response.text) })
    })
  }

  requestJoinGroup(url, groupId)
  {
    console.log('url', url)
    let userId = localStorage.getItem('userId')
    Request.post(url)
      .type('form')
      .send({ userId: userId })
      .end( (err, res) =>
      {
        if (err || !res.ok)
          console.log("requestJoinGroup error")
        else // successfully join group
        {
          let tmpGroups = this.state.groups
          for (let i in tmpGroups)
            if (tmpGroups[i]._id === groupId)
            {
              tmpGroups[i].members.push(groupId)
              break
            }
          this.setState({groups: tmpGroups})
        }
      })
  }


  render()
  {

    let groupsDisplay = this.state.groups.map((group, index) =>
      <li key={group._id} className="group boxShadow1" id={index}>
        <section className="groupTextInfo">

          <h2 className="groupName verticalAlignFlex">
            <Link to={"groups/" + group._id}>
              <section className="verticalAlignFlex">
              <img className="gravatarSmall marginRight10px" src={this.getGravatar(group.gravatar)} alt={group.name}/>
              <span> {group.name} - {group.class} </span>
              </section>
            </Link>
            <button className={this.hideIfMember(group) + " joinGroupButton rightJustifyFlex verticalAlignFlex tabPlusOnly" } onClick={ () => this.handleClickJoinGroup({ groupId: group._id} ) }>
              JOIN GROUP &nbsp;
              <i className="material-icons">person_add</i> &nbsp;
            </button>
            <button className="joinGroupButton rightJustifyFlex verticalAlignFlex mobileOnly" onClick={ () => this.handleClickJoinGroup({ groupId: group._id} ) }>
              <i className="material-icons">person_add</i> &nbsp;
            </button>
          </h2>
          <h3>{group.description}</h3>

        </section>

        <ul className="groupInfo fullWidth flexHorizontalLayout" id="">
          <li className="groupMembers tabPlusOnly verticalAlignFlex">
          <i className="material-icons">group</i> &nbsp; {group.members.length} members </li>
          <li className="meetingTimes verticalAlignFlex"> <i className="material-icons">access_time</i> &nbsp; {group.meetingTimes} </li>
          <li className="locationName tabPlusOnly verticalAlignFlex">
            <i className="material-icons">place</i> &nbsp;
            <span className="whiteText"> {group.locationName} </span>
          </li>
        </ul>
      </li>
    )

    return(

      <div>
        {/* Sidebar */}
        <section className="sidebar textCenter">
          <br />
          <h1 className="textCenter sidebarTitle">{this.getLocalStorage("userName")}</h1>
          <img className="profileGravatar" src={this.getLocalStorage("userGravatar")} alt="User" />

          <h2 className="textCenter">Reminders</h2>
            <h4 className="reminder">No Reminders At This Time</h4>

          <h2 className="textCenter">My Groups</h2>
          <ul className="myGroups">
            {/*myGroups*/}
          </ul>
        </section>

        {/* Main */}
        <main className="sidebarMain">
          {/* Groups Display */}
          <ul className="groups">
             <h1 className="textCenter darkGreyText">Groups</h1>
              {groupsDisplay}
          </ul>
        </main>
      </div>

    )
  }
}

export default Groups
