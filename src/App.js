import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Profile from './components/Profile';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state ={
    isVisible:false
  }


toggleVisibiblity = () => {
  this.setState({
    isVisible : !this.state.isVisible,
  })
}

  render() {
      return (
          <div className="home">
              <button className="btn btn-primary" onClick={this.toggleVisibiblity}>
                {this.state.isVisible ? 'Hide' : 'show'}
              </button>
            {this.state.isVisible && <Profile/>}  
          </div>
      )    
  }
}

export default App;
