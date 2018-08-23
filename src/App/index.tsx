import * as React from 'react';
import { EnhancedForm } from '@app/src/App/Components/Form';

type IInitialValues = {
  firstName: string,
  lastName: string,
  userName: string,
  confirmUserName: string,
  notifications: boolean,
  description: string,
}

export class App extends React.Component<{}, {}> {

  private initialValues: IInitialValues;

  constructor(props: any) {
    super(props);
    this.initialValues = {
      firstName: '',
      lastName: '',
      userName: '',
      confirmUserName: '',
      notifications: false,
      description: '',
    }
  }

  render() {
    return(
      <React.Fragment>
        <EnhancedForm initialValues={this.initialValues}/>
      </React.Fragment>
    );
  }
}
