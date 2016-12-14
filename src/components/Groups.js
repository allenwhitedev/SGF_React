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
    let url = "http://localhost:3000/groups"
    this.requestGroupsFromURL(url) // get groups from backend
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
    //let myGroups = this.state.myGroups
    //let groups = this.state.groups

    console.log("group", group)
    // for (let i = 0; i < myGroups.length; i++)
    //   if ( myGroups[i].name === name.name )
    //     return
    
    // // add user to group if they are not already a member
    // if ( groups[name.index].members.indexOf("basidjfkdkdf") === -1 )
    //   tmpGroupsHere[name.index].members.push("basidjfkdkdf")
      
    // // add group to user's myGroups
    // myGroups.push(name)

    // // update state
    // this.setState((prevState, props) => ({
    //   myGroups: myGroups, groups: groups
    // }))

  }

  requestGroupsFromURL(url)
  {
    Request.get(url).then( (response) => {
      this.setState({groups: JSON.parse( response.text) })
    })
  }


  render()
  {
    
    let groupsDisplay = this.state.groups.map((group, index) =>
      <li key={group._id} className="group boxShadow1" id={index}>
        <section className="groupTextInfo"> 
          
          <h2 className="groupName verticalAlignFlex"> 
            <Link to={"groups/" + group.name}>
              <section className="verticalAlignFlex"> 
              <img className="gravatarSmall marginRight10px" src={this.getGravatar(group.gravatar)} alt={group.name}/> 
              <span> {group.name} - {group.class} </span> 
              </section>
            </Link>
            <button className="joinGroupButton rightJustifyFlex verticalAlignFlex tabPlusOnly" onClick={ () => this.handleClickJoinGroup({ groupId: group._id} ) }> 
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
          <h1 className="textCenter sidebarTitle">Brandon34</h1>
          <img className="profileGravatar" src={gravatar1} alt="User" />

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
