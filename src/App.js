import React from "react";

//React.Component는 state를 가지고 있음

class App extends React.Component{
  state = {
    number : 0
  }
  add = () => {
    this.setState(cur => ({ number : cur.number + 1 }))
  }
  minus = () => {
    this.setState({ number : this.state.number - 1})
  }
  componentDidMount(){
    console.log("방금 웹사이트가 처음으로 구현되었습니다.");
  }
  componentDidUpdate(){
    console.log("방금 웹사이트가 업데이트 되었습니다.");
  }
  componentWillUnmount(){
    console.log("웹사이트를 떠납니다! 안녕!");
    // 제일 마지막에 실행되어 console log를 볼 순 없음
  }
  render(){
    const {number} = this.state;
    return <div>
      <h1>I am Class Component : {this.state.number}</h1>
      <h1>I am Class Component : {number}</h1>
      <button onClick={this.add}>ADD</button>
      <button onClick={this.minus}>MINUS</button>
    </div>
  }
}

export default App;
