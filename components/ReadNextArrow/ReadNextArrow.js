import React from 'react'

const ReadNextArrow = (props) => {
    return (
        <a href={props.id}>
        <span className="absolute text-white text-lg focus:outline-none next-arrow">↓</span>
        </a>
    );
}

export default ReadNextArrow;