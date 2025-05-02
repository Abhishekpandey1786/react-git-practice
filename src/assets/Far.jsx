import React from 'react'

class Far extends React.Component {
    render() {
    console.warn("render method",this.props)
  return (
    <div>
     <h1>some thind</h1>
    </div>
  )
}
}

export default Far