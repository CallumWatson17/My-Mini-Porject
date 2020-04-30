import React from "react";
import axios from "axios";

const HomePage = (Wrapped) =>
  class Home extends React.Component {
    state = {
      content: [],
      param: "players",
    };

    getData = (queryString, param) => {
      axios
        .get(`http://localhost:4000/${param}/${queryString}`)
        .then((response) => {
          this.setState({ content: response.data, param });
        });
    };

    render() {
      return (
        <Wrapped
          getData={this.getData}
          pageContent={this.state.content}
          type={this.state.param}
        />
      );
    }
  };

export default HomePage;
