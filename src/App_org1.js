import React, { Component } from 'react';
import Subject from "./components/Subject"
import Content from "./components/Content"
import TOC from "./components/TOC"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: "Web", sub: "world wide web" },
      contents: [
        { id: 1, title: "HTML", sub: "HTML is for informantion." },
        { id: 2, title: "CSS", sub: "CSS is for design." },
        { id: 3, title: "JavaScript", sub: "JavaScript is for interactive." }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
