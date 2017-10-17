import React, { Component } from 'react';

const simplerComponent = (props) => {

  return (
    <div onClick={props.handleClick} className = "happy">
    return "I am just happy."
    </div>
  )
}

export default simplerComponent
