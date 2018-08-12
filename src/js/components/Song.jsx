import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';


const Song = ({ song }) => (
//class Song extends Component {
    /*constructor(props) {
        super(props);
    }

    componentDidMount() {
        //
    }

    render() {
        const { songs } = this.props;
        const style = {
            height: "500px",
            overflowY: "scroll",
        };*/

        // return
        (
            <li key={ song.id }>
                <img src={ song.image } />
                <div className="details">
                    <h1>{ song.title }</h1>
                    <h2>by { song.artist }</h2>
                    <h2>Rank: { song.rank }</h2>
                </div>
            </li>
        )
    /*}
}*/
);

export default Song;

/////////////////////


/*

<div style={style} ref={(ref) => this.container = ref}>
                    {lyrics.split("\n").map(paragraph => {
                        return <p>{paragraph}</p>
                    })}
                </div>
 */


/*
import React from 'react'
import PropTypes from 'prop-types'
​
const Todo = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={ {
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </li>
)
​
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}
​
export default Todo*/