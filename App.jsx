import React from 'react';
import Header from './components/header.jsx';
import Content from './components/content.jsx';
import Footer from './components/footer.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}
