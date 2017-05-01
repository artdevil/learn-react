import React from 'react';

export default class Footer extends React.Component{
  render(){
    return (
      <div>
        <p><b>{this.props.dataFooter}</b></p>
      </div>
    )
  }
}
