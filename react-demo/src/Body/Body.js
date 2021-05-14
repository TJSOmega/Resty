import React from "react"
import './Body.scss'
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formChange: {},
      url: '',
      method: ''
    }

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({url: this.state.formChange.url })
    this.setState({ method: this.state.formChange.method })
  }

  handleChange = (e) => {
    let formName = e.target.name
    let value = e.target.value
    let formChange = {...this.state.formChange, [formName]: value}
    this.setState({formChange})
  }
  

  render() {
    
    return (
      <body>

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
      </body>
    )
  }
}

export default Body