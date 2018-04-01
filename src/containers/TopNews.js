import ReactDOM from 'react-dom'
import React from 'react'
import { connect } from 'react-redux'
import { NewsItem } from '../components/NewsItem';

let TopNews = ({ channels }) => {
    let topNews = null;
    if (channels) {
        topNews = channels.map((article, index) =>
            (
                <div key={`${index}`} className="row">
                    <NewsItem article={channels[index]} />
                </div>
            )
        )
    }

    return (
        <div>
            {topNews}
        </div>
    )
}

const mapStateToProps = (state) => ({
    channels: state.json
})

TopNews = connect(
    mapStateToProps,
    null
)(TopNews)

export default TopNews;


