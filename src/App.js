import React, { Component } from 'react';
import Subject from "./components/Subject"
import TOC from "./components/TOC"
import Control from "./components/Control"
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // mode: "welcome",
      // mode: "read",
      mode: "create",
      selected_content_id: 0,
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
    var _title, _desc, _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === "create") {
      _article = <CreateContent onSubmit={function(_title, _desc){
        // add content to this.state.contents
        console.log(_title, _desc);
      }}></CreateContent>
    }
    console.log('render', this)
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.desc}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
            // debugger;
          }.bind(this)}>
        </Subject>
        <h2>{this.state.subject.desc}</h2>
        <TOC onChangePage={function (id) {
          this.setState({
            mode: "read",
            selected_content_id: Number(id)
          });
        }.bind(this)}
          data={this.state.contents}>
        </TOC>
        <Control onChangeMode={function (_mode) {
          this.setState({
            mode: _mode
          })
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;
