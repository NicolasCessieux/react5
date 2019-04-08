import React, { Component } from 'react';
import  GenerateQuote  from  './GenerateQuote';
import  DisplayQuote  from  './DisplayQuote';
import './App.css';

const sampleQuote = {
  quote: "When I look at people I don't see colors; I just see crackpot religions.",
  character: "Chief Wiggum",
  image:	"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FChiefWiggum.png?1497567511716"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: sampleQuote
    };
  }
  getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(results  =>  results.json())
      .then(data  => {
        this.setState({
          quote: data[0],
        });
    });
  }
  render() {
    return (
      <div className="App">
        <GenerateQuote selectQuote={() => this.getQuote()} />
        <DisplayQuote quote={this.state.quote} />
      </div>
    );
  }
}

export default App;
