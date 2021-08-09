import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props){
      console.log("constructor()");
      super(props);

    }

    state = {
        fullName: "Mohamed Ali Mrad",
        bio: "I'm a junior fullstack JS developer",
        imgSrc:"b.jpg",
        profession:" I'm a student",
        intervall:null,
        time:0
    }
    
    componentDidMount(){
      console.log("componentDidMount()")
      this.setState({
        intervall: setInterval(() => {
          this.setState({ time:this.state.time +1 });
        },1000),
      });
    }
    
    componentDidUpdate(){
      console.log("componentDidUpdate()");
    }
    
    componentWillUnmount(){
      console.log("componentWillUnmount()");
      clearInterval(this.state.intervall);
    }

    render() {
      console.log("render()");
        return (
            <div>
                <h1>{this.state.fullName}</h1>
                <h3>{this.state.bio}</h3>
                <h4>{this.state.profession}</h4>
                <h5>{this.state.time}</h5>
                <img width="600" src={this.state.imgSrc}/>
            </div>
            
        )
    }
}
