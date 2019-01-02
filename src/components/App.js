import React, { Component } from 'react';
import axios from 'axios'
import '../scss/App.scss';
import Constants from '../constants';

class App extends Component {

  constructor (props) {
    super(props);
    this.getAdvice = this.getAdvice.bind(this);
    
    this.state = {
      advice: ''
    }
  }

  getAdvice(){
    axios.get('/api/magic8ball/v1/')
    .then(response => {
      this.setState({
        advice: response.data
      })
    })
    .catch(error =>  {
      this.setState({
        showError: true,
        errorMsg: Constants.ERROR_API_ADVICE
      })
      console.error(error);
    })
  }

  componentDidMount(){
    this.getAdvice();
  }

  render() {
    const {advice} = this.state;
    return (
      <div className="App">
        <header className="App-header">
        {advice}
        </header>
      </div>
    );
  }
}

export default App;
