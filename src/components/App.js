import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import Login from './login'
import Home from './home'
import Nav from './nav'
import Leader from './leader'
import Add from './newQuestion'
import QuestionDetail from './questionDetail'
import Err from './error'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {this.props.display !== true
          ? null
          :
            <div>
              {this.props.authedUser === null ?(
                <Route  render={()=>(
                  <div>
                    <Login/>
                  </div>
                )} />
              ):(
                <Fragment>
                  <Nav/>
                  <div>
                    <Switch>
                      <Route path='/' exact component={Home}/>
                      <Route path='/question/:id'  component={QuestionDetail}/>
                      <Route path='/add' component={Add}/>
                      <Route path='/leader' component={Leader}/>
                      <Route path='/:error' component={Err}/>
                    </Switch>
                  </div>
                </Fragment>
              )}
            </div>
          }
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser,display }){
  return{
      authedUser,
      display
  }

}


export default connect(mapStateToProps)(App)