import React, { Component } from 'react'
import ListContainer from './ListContainer'
import Menu from './Menu'
import datajson from './data.json'


export class App extends Component {


  render() {
    const data = datajson
    return (
      <div>
        <Menu></Menu>
        
        <ListContainer data={data}/>
      </div>
    )
  }
}

export default App

