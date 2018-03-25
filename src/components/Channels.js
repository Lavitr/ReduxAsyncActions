import React from 'react'
import Channel from '../containers/Channel'

 const Channels = () => (

  <div className="row" >
    <Channel channelName="BBC" channelKey="bbc-news" />
    <Channel channelName="CNBC" channelKey="cnbc" />
    <Channel channelName="CNN" channelKey="cnn" />
    <Channel channelName="FT" channelKey="financial-times" />
    <Channel channelName="ESPN" channelKey="espn" />
    <Channel channelName="GOOGLE" channelKey="google-news" />
  </div>
);

export default Channels;