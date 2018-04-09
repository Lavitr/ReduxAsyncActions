import React from 'react'
import Channel from '../containers/Channel'

const ChannelsField = () => (

  <div className="row" >
    <Channel channelName="BBC" channelString="bbc-news" />
    <Channel channelName="CNBC" channelString="cnbc" />
    <Channel channelName="CNN" channelString="cnn" />
    <Channel channelName="FT" channelString="financial-times" />
    <Channel channelName="ESPN" channelString="espn" />
    <Channel channelName="TIME" channelString="time" />
  </div>
);

export default ChannelsField;

