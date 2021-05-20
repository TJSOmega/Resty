import React from "react"
import axios from "axios"
import Header from "./Header/Header.js"
import Body from "./Body/Body.js"
import Footer from "./Footer/Footer.js"
import Results from "./Results/results.js"


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  fetchData = async (options) => {
    const response = await axios({
      method: options.method,
      url: options.url,
      data: options.data
    });
    const results = response.data

    this.setState({results})
  }

  render() {
    return (
      <>
        <Header />
        <Body handler={this.fetchData} />
        <Results item={this.state.results} />
        <Footer />
      </>
    )
  }
}

export default App