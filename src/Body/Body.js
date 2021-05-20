import React from "react"
import './Body.scss'


// Form
class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
  
    }

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handler(this.state)
    this.setState()
  }

  handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    this.setState({...this.state, [name]: value})
  }
  

  render() {
    
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <label>URL</label><input name="url" type="text" onChange={this.handleChange}></input>
          <button type="submit">Submit</button>
          <label><input type="radio" name="method" value="get" onChange={this.handleChange}></input><span>GET</span></label>
          <label><input type="radio" name="method" value="post" onChange={this.handleChange}></input><span>POST</span></label>
          <label><input type="radio" name="method" value="put" onChange={this.handleChange}></input><span>PUT</span></label>
          <label><input type="radio" name="method" value="delete" onChange={this.handleChange}></input><span>DELETE</span></label>
        </form>
        <section id="methodPrint">
        <div className="methodPlace">{this.state.method}</div>
        <div className="methodPlace">{this.state.url}</div>
        </section>
      </div>
    )
  }
}

export default Body