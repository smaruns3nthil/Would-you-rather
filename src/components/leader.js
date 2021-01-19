import React, { Component } from 'react'
import { connect } from 'react-redux'


class Leader extends Component {
  
  render() {
    const {usersArr} = this.props
    return (
      <div>
        <h3>Leaderboard</h3>
        <div>
          <ul style={{listStyleType:'none'}}>
            {usersArr.map((user)=>(
              <li style= {{marginTop:'10px' , marginBottom:'25px'}} key={user.id}>
                <div style={{height:'200px', border:'1px solid', padding:'15px'}}>
                  <div style={{ display:'inline-block',borderRight: '1px solid grey', paddingTop:'35px', paddingBottom:'35px',verticalAlign:'top' ,width:'25%'}}>
                    <img alt='avatar' src={`${user.avatarURL}`} style={{height:'100px',width:'100px', paddingRight:'10px', borderRadius:'35px'}}/>
                  </div>
                  <div style={{ display:'inline-block', paddingTop:'35px', paddingBottom:'35px', width:'50%',verticalAlign:'top' ,}}>
                    <p style={{fontWeight:'bold'}}>{user.name}</p>
                    <div>
                      Questions Answered : {Object.keys(user.answers).length}
                    </div>
                    <div>
                      Questions Asked : {user.questions.length}
                    </div>
                  </div>
                  <div style={{display:'inline-block', paddingTop:'35px', paddingBottom:'35px', width:'25%',verticalAlign:'top' }}>
                    <div style={{height:'100px', border:'1px solid grey', padding:'15px'}}>
                      <p>Score</p>
                      <div>{user.score}</div> 
                    </div>
                  </div>
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
      usersArr:usersArr.sort( (a, b) => b.score - a.score)
    }
}


export default connect(mapStateToProps)(Leader)