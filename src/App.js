import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
     serverResponse: ''
    }
   }

   async getData(){
    const res = await axios('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.data;
    this.setState({serverResponse: data})
  }
  componentDidMount() {
    this.getData().catch(alert);
  }
  render(){
   return(
      <div>
        {this.state.serverResponse.title}
      </div>
   );
  }
}

export default App;
