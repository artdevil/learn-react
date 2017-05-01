import React from 'react';
import Header from './components/header.jsx';
import Content from './components/content.jsx';
import Footer from './components/footer.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      header: "ini header",
      footer: "ini footer"
    };

  }

  changeHeader(e){
    this.setState({header: e.target.value});
  }

  changeFooter(e){
    this.setState({footer: e.target.value});
  }

  render() {
    return (
      <div>
        <Header header={this.state.header} />
        <Content
          valueState={this.state}
          changeHeader={this.changeHeader.bind(this)}
          changeFooter={this.changeFooter.bind(this)} />
          
        <Footer footer={this.state.footer} />
      </div>
    )
  }
}
