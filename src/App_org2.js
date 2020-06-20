import React, { Component } from 'react';
import Subject from "./components/Subject"
import Content from "./components/Content"
import TOC from "./components/TOC"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mod: "welcome",
      subject: { title: "WEB", desc: "Welcome to web" },
      welcome: { title: "welcome", desc: "Hi, React" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for informantion." },
        { id: 2, title: "CSS", desc: "CSS is for design." },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive." }
      ]
    }
  }
  render() {
    console.log("App render");
    var _title, _desc = null;
    if (this.state.mod === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject title={this.state.subject.title} sub={this.state.subject.desc}></Subject> */}
        <header>
          <h1>
            <a href="/" onClick={function (e) {
              console.log(e);
              e.preventDefault();
              // debugger;
            }}>{this.state.subject.title}</a>
          </h1>
          {this.state.subject.desc}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
