import React from 'react';

export default class Footer extends React.Component{
  render(){
    return (
      <div>
        <p><b>{this.props.footer}</b></p>
      </div>
    )
  }
}
