import ReactDOM from 'react-dom'
import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

export class Button extends React.Component {

  handleClick(evt) {
    const { store } = this.context;
    const channels = store.getState();
    console.log(channels);
    const channelString = channels.channel;
    store.dispatch(fetchPosts(channelString));
  }
  render() {
    return (

      <button
        onClick={e => this.handleClick(e)}
        className="btn btn-primary btn-lg btn-block"
            >Show NEWS
      </button>

    );
  }
}
