import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    // 그려지자마자 호출되는얘 useEffect 빈배열 [] 주는거랑같음
    // 마운트는 나타는놈
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    // 사라지기전에 호출될얘
    // 언마운트는 사라지는놈
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        // 디스 데이트 업데이트쳐주고있음
        this.setState({
            date: new Date()
        });
    }
    
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
