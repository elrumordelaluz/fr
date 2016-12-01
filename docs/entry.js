import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Filter } from '../src';



class App extends Component {
  render() {
    return (
      <Filter>
        <circle cx="160" cy="60" r="50" fill="green" />
        <Filter>
          <circle cx="85" cy="60" r="50" fill="red" />
        </Filter>
      </Filter>
    )
  }
}

ReactDOM.render(<App />, root)
