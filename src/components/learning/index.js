import React, { Component } from 'react'

export default class Learning extends Component {
  componentWillMount() {
    this.props.beginLearning()
  }
  render() {
    return (
      <div>
        <p>This is a React Redux project</p>
        <p>{this.props.isLearning ? 'isLearning' : 'isNotLearning'}</p>
      </div>
    )
  }
}
