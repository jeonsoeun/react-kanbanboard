import React from 'react';
import Board from './Board';
import Banner from './Banner';

class App extends React.Component {
  componentDidMount(){
    window.addEventListener("click",(ev) => {
      const targetClass = ev.target.className;
      
    })
  }
  render() {
    return (
      <div className="App">
        <Banner />
        <Board />
      </div>
    )
  }
}


export default App;
