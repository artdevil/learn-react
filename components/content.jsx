import React from 'react';

export default class Content extends React.Component{
  render(){
    return (
      <div>
        <div>
          <label>Header</label> <input value={this.props.valueState.header} onChange={this.props.changeHeader}/>
        </div>
        <div>
          <label>footer</label> <input value={this.props.valueState.footer} onChange={this.props.changeFooter}/>
        </div>
      </div>
    )
  }
}
