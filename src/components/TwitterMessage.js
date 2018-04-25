import React from "react";
import PropTypes from "prop-types";
//read more about proptypes here: https://reactjs.org/docs/typechecking-with-proptypes.html

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { message: "" };
  }

  setMessage = event => {
    this.setState({ message: event.target.value });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.message}
          onChange={this.setMessage}
        />
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}



TwitterMessage.defaultProps = {
  maxChars: 140,
};

export default TwitterMessage;
