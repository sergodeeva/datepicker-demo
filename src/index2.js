import React from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Datepicker extends React.Component {
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
    return <DatePicker selected={this.state.date} onChange={this.handleChange} />;
  }
}

class Index2 extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Datepicker />
      </div>
    );
  }
}

ReactDOM.render(<Index2 />, document.getElementById("root"));
