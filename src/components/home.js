import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './questionList'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class Home extends Component {
  state={
    answerView:false
  }
  handleClick=(answerView)=>{
    this.setState({answerView:answerView})
  }
  render() {

    const {authedUser,questionsArr} = this.props
    const questionList = questionsArr.filter((question)=>{
      const filtered = (
        question.optionOne.votes.indexOf(authedUser) > -1 ||
        question.optionTwo.votes.indexOf(authedUser) > -1
    )
    return this.state.answerView ? filtered : !filtered
    })
    return (
      
      <div style={{marginTop:'10px'}}>
        <Tabs
          id="controlled-tab"
          defaultActiveKey="false"
          onSelect={(k) => {
            if(k === 'true')
            {
              this.handleClick(true)
            }
            else{
              this.handleClick(false)
            }
          }}
          >
            <Tab eventKey="false"  title="Unanswered Question">
            </Tab>
            <Tab eventKey="true"  title="Answered Question">
            </Tab>
        </Tabs>
        <div>
          <QuestionList questions={questionList} view={this.state.answerView}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps({authedUser,questions}){
    return{
        authedUser,
        questionsArr:Object.values(questions).sort((a, b) => b.timestamp - a.timestamp)
    }

}


export default connect(mapStateToProps)(Home)