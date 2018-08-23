import * as React from 'react';
import { enhanceForm } from '@app/src/App/HOCs/enhanceForm';

interface IFormProps {
  state: any,
  handleSubmit(): any,
  handleChange(): any,
}

const Form: React.SFC<IFormProps> = ({ state, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>
      First Name:
      <input
        type="text"
        name="firstName"
        value={state.firstName}
        onChange={handleChange} />
    </label>
    <br />
    <label>
      Last Name:
      <input
        type="text"
        name="lastName"
        value={state.lastName}
        onChange={handleChange} />
    </label>
    <br />
    <label>
      User Name:
      <input
        type="text"
        name="userName"
        value={state.userName}
        onChange={handleChange} />
    </label>
    <br />
    <label>
      Confirm User Name:
      <input
        type="text"
        name="confirmUserName"
        value={state.confirmUserName}
        onChange={handleChange} />
    </label>
    <br/>
    <label>
      Notifications:
      <input
        type="checkbox"
        name="notifications"
        checked={state.notifications}
        onChange={handleChange} />
    </label>
    <br />
    <textarea
      name="description"
      value={state.description}
      onChange={handleChange} >
    </textarea>
    <button>Submit</button>
  </form>
);

export const EnhancedForm = enhanceForm(Form);
