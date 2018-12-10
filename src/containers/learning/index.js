import React, { Component } from 'react'
import { connect } from 'react-redux'
import Learning from 'components/learning'
import { beginLearning } from 'redux/actions/learning'

class LearningContainer extends Component {
  render() {
    return (
      <div>
        <Learning isLearning={this.props.isLearning} beginLearning={() => this.props.dispatch(beginLearning())} />
      </div>
    )
  }
}

export default connect(state => state.learning)(LearningContainer)
