import React from 'react'

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [],
    }
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  clearInput() {
    this.setState({
      input: '',
    });
  }

  submitInput() {
    const {messages} = this.state;
    this.setState({
      messages: [...messages, this.state.input]
    });
    this.clearInput();
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.input} />
        <button type="submit" onClick={() => this.submitInput()}>{`Submit Message`}</button>
        <ul>{this.state.messages.map(e => <li>{e}</li>)}</ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};

export default DisplayMessages;
