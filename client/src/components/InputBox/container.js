import React from "react";

const InputBoxComponent = (Wrapped) =>
  class Input extends React.Component {
    state = {
      type: "players",
    };

    onSelectChange = (event) => {
      const value = event.target.value;
      this.setState({ type: value });
    };

    onInputChange = (event) => {
      const value = event.target.value;

      this.props.getData(value, this.state.type);
    };

    render() {
      return (
        <Wrapped
          onInputChange={this.onInputChange}
          onSelectChange={this.onSelectChange}
        />
      );
    }
  };

export default InputBoxComponent;
