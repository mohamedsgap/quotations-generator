import React from 'react';
import './App.css';
import {quotes} from './Quotes.js'

class App extends React.Component{

  // const [quotesNumber, setQuotesNumber] = useState(0)


  state= {
    selectedQuotesNumber: 0,
    selectedQuotesType: '',
    generatedQuotes: []
  }

  selectedQuotesNumber = (event) => {
    this.setState({
      selectedQuotesNumber: event.target.value
    })
    // setQuotesNumber(event.target.value);
  }
  selectedQuotesType = (event) => {
    this.setState({
      selectedQuotesType: event.target.value
    })
  }

  
  deleteQuotes = (e) => {
    e.preventDefault();
    this.setState({
      generatedQuotes: []
    })
  }
  

  generatedQuotes = (e) => {
    let gq = this.state.generatedQuotes;
    e.preventDefault();
      for (let i = 0; i < parseInt(this.state.selectedQuotesNumber); i++) {
          let beginQuotes = quotes[`${this.state.selectedQuotesType}`].begin[Math.floor(Math.random() * 10)]
          let middleQuotes = quotes[`${this.state.selectedQuotesType}`].middle[Math.floor(Math.random() * 10)]
          let endQuotes = quotes[`${this.state.selectedQuotesType}`].end[Math.floor(Math.random() * 10)]
          let fullQuote = `${beginQuotes} ${middleQuotes} ${endQuotes}`
          gq.push(fullQuote)
          this.setState({
            generatedQuotes: gq
          })
         console.log(fullQuote);
      }
      

    
     console.log("Mohamed is here");
  }
 
  render(){
    return (
      <div className="App">
        <h1 className="title">Quote Generator</h1>
        <div className="form-content">
        <form onSubmit={this.generatedQuotes}>
        <label><input type="radio"  value="tech" name='quote' onChange={this.selectedQuotesType}/>Tech</label>
        <label><input type="radio" value="sport" name='quote'onChange={this.selectedQuotesType}/>Sport</label>
        <select id="dropdown" onChange={this.selectedQuotesNumber}>
          <option>Select number of quotes you want to generate</option>
          <option value="1">One quote</option>
          <option value="2">Two quotes</option>
          <option value="3">Three quotes</option>
          <option value="4">Four quotes</option>
          <option value="5">Five quotes</option>
        </select>
        </form>
        </div>
        <div className="buttons-app">
        <button className="gen-btn" type="submit" onClick={this.generatedQuotes}>Generate</button>
        <button className="del-btn" onClick={this.deleteQuotes}>Delete</button>
        </div>
        <div className="container">
        <div>{this.state.generatedQuotes.map(smallQuote=> {
              return (
                <li key={Math.random()} >{smallQuote}</li>
        )
        })}</div>
        </div>
      </div>
    );
  }
}

export default App;
