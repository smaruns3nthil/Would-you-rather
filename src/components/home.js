import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './questionList'


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
      <div>
        <div>
          <button onClick={()=>this.handleClick(false)}>Unanswered questions</button>
          <button onClick={()=>this.handleClick(true)}>Answered questions</button>
        </div>
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