import React from 'react'
import ReactJson from "react-json-view"
import "./results.scss"

class Results extends React.Component {


  render() {
    return (
      <div>
        <h2>Results</h2>
        <div>
          <section>
            {
              <ReactJson src={this.props.item} />
            }
          </section>
        </div>
      </div>
    )
  }
}


export default Results