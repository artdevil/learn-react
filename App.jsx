import React from 'react';
import Header from './components/header.jsx';
import Content from './components/content.jsx';
import Footer from './components/footer.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props);

    // deklarasi isi state
    this.state = {
      header: "ini header",
      footer: "ini footer"
    };

  }

  // mengubah header dengan setState
  changeHeader(e){
    this.setState({header: e.target.value});
  }

  // mengubah footer dengan setState
  changeFooter(e){
    this.setState({footer: e.target.value});
  }

  // dataState : props untuk melempar data state ke component konten
  // changeHeader, changeFooter: props untuk menangkap data perubahan dari component konten
  // dataHeader: props untuk melempar data state ke component header
  // dataFooter: props untuk melempar data state ke component footer

  render() {
    return (
      <div>
        <Header dataHeader={this.state.header} />

        <Content
          dataState={this.state}
          changeHeader={this.changeHeader.bind(this)}
          changeFooter={this.changeFooter.bind(this)} />

        <Footer dataFooter={this.state.footer} />
      </div>
    )
  }
}
