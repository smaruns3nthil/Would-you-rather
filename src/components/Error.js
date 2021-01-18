import React, { Component } from 'react'
import { connect } from 'react-redux'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


class Err extends Component {
  
  render() {
    return (
      <Container style={{textAlign:'center'}}>
        <Jumbotron style={{  height: '50vh', marginTop:'100px'}}>
          <p style={{marginTop:'175px', fontWeight:'bold'}}>
            This Page doesnt Exist, Please go to Home.
          </p>              
        </Jumbotron>
      </Container>
    )
  }
}

function mapStateToProps({authedUser}){
    return{
        authedUser:authedUser
    }

}


export default connect(mapStateToProps)(Err)