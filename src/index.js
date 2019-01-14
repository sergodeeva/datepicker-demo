import React from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Datepicker extends React.Component {
  render() {
    return (
      <DatePicker
        selected={this.props.date}
        onChange={() => {
          this.props.handleChange(this.props.date);
        }}
      />
    );
  }
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      date: date
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Datepicker date={this.state.date} handleChange={this.handleChange} />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
