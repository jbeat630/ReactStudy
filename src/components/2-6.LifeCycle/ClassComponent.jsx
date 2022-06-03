import React, { Component } from 'react'

export default class ClassComponent extends Component {
    // state 초기화 및 메서드 바인딩할때쓰임
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {date: new Date()};
        // 에로우펑션을 활용하면 바인딩안해줘도됨
        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.timerID = setInterval(() => this.tick(),5000);
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
        clearInterval(this.timerID);
    }
    tick(){
        // console.log('tick');
        this.setState({date: new Date});
    }
    // handleClick(){
    //     alert(this.state.date);
    // };
    handleClick = () => {
        alert(this.state.date);
    }
    render() {
        console.log('render');
        return (
            <div>
                <h1 onClick={this.handleClick}>Hello, world!</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
  }
}
