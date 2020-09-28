import {ADD_REMINDER, DELETE_REMINDER} from './constants';

export const addReminder = (text) => {
  return {
    type: ADD_REMINDER,
    text
  }
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log(action);
  return action;
}
