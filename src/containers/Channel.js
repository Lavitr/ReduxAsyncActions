import React from 'react'
import { connect } from 'react-redux'
import { getChannel } from '../actions'

let Channel = ({ channelName, channelString, onClick }) => (

    <div onClick={onClick} className=" col-lg-2 col-md-4 col-sm-6 ">
        <div className="channel-button" >
            <p className="">{channelName}</p>
        </div>
    </div>

)

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(getChannel(ownProps.channelString));
    }
})

Channel = connect(
    null,
    mapDispatchToProps
)(Channel)

export default Channel;
