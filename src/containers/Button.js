import ReactDOM from 'react-dom'
import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

let Button = ({ getPosts, channel }) => (
  <button
    onClick={() => { getPosts(channel) }}
    className="btn btn-primary btn-lg btn-block" >
    Press to see top news from:<span className="shown-channel">{channel}</span>
  </button>
);

const mapStateToProps = (state) => ({
  channel: state.channel
})

const mapDispatchToProps = {
  getPosts: fetchPosts
}

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;
