import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import '../main-css/App.css';


import Header  from './Header.js'
import Main    from './Main.js'
import Rentals from "./Rentals"

class App extends Component {

  constructor(){
    super()
    this.state ={
      data: {articles:"23"}
    }
  }

  getList(apiData){
    this.setState({data:apiData})
  }

  createList(){
    ///
  }

  render() {
    return (
      <StickyContainer>

      <div className="App">
        <Sticky topOffset={0}>
          <Header />
        </Sticky>
        <Main  getList={this.getList.bind(this)}/>
        <Rentals data={this.state.data}/>
      </div>
      </StickyContainer>
    );
  }
}

export default App;
