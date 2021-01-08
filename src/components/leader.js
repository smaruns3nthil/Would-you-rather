import React, { Component } from 'react'
import { connect } from 'react-redux'


class Leader extends Component {
  
  render() {
    const {usersArr} = this.props
    return (
      <div>
        <h3>Leaderboard</h3>
        <div>
          <ul>
            {usersArr.map((user)=>(
              <li key={user.id}>
                <div>{user.name}</div>
                <img alt='avatar' src={`${user.avatarURL}`}/>
                <div>
                  Number of answered questions {Object.keys(user.answers).length}
                </div>
                <div>
                  Number of questions asked :{user.questions.length}
                </div>
                <div>
                  Total :{user.score}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps({users}){
    const usersArr = Object.values(users)
    usersArr.map((user)=>user.score=Object.keys(user.answers).length+user.questions.length)
    return{
      usersArr:usersArr.sort( (a, b) => b.totalScore - a.totalScore)
    }
}


export default connect(mapStateToProps)(Leader)