import React from 'react';
import Header from './components/header.jsx';
import Content from './components/content.jsx';
import TableRow from './components/table_row.jsx';

export default class App extends React.Component {
  constructor(){
    super();

    this.state = {
      data:
      [
        {
          "id": 1,
          "name": "Foo",
          "age": "20"
        },
        {
          "id": 2,
          "name": "Bar",
          "age": "30"
        },
        {
          "id": 3,
          "name": "Baz",
          "age": "40"
        },
      ]
    }
  }

  render() {
    return (
      <div>
        <Header />

        <table>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key={i} data={person} />)}
          </tbody>
        </table>

        <Content />
      </div>
    )
  }
}
