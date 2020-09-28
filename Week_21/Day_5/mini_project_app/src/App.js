import React from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import {addReminder, deleteReminder} from './redux/actions';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: ""
    }
  }
  addReminder = () => {
    console.log(this)
    this.props.addReminder(this.state.text)
  }

  deleteReminder = (id) => {
    console.log(id);
    console.log(this.props);
    this.props.deleteReminder(id)
  }

  renderReminders = () => {
    const { reminders } = this.props;
    console.log(reminders);
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map((reminder) => {
            return(
              <li key={reminder.id} className="list-group-item"><div className="list-item">{reminder.text}<div className="list-item delete-button" onClick={() => this.deleteReminder(reminder.id)}>&#x2715;</div></div></li>
            )
          })
        }
      </ul>
    )
  }
  render(){
    console.log(this.props)
    return(
      <div className="App">
        <div className="title">
          <h1>Reminder App</h1>
        </div>
        <div className="form-inline reminder-form">
          <form className="form-group">
            <input lassName="form-control" type="text" onChange={(event) => this.setState({text: event.target.value})}/>
            <button type="button" className="btn btn-success" onClick={this.addReminder}>Add Reminder</button>
          </form>
        </div>
        {this.renderReminders()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    reminders: state
  }
}
export default connect(mapStateToProps, {addReminder, deleteReminder})(App);
