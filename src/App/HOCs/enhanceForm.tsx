import * as React from 'react';

interface IProps {
  initialValues: object,
}

interface IState {
  form: object,
}

export const enhanceForm = (Component: React.SFC<any> | React.ComponentClass) =>
  class HigherOrderComponent extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = { form: props.initialValues }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e: any) {
    e.preventDefault()
    console.log(JSON.stringify(this.state, null, 4))
  }

  handleChange(e: any) {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value

    this.setState((state) => ({form: {...state.form, ...{[name] : value}}}))
  }

  render() {
    return (
      <Component
        { ...this.props}
        state={this.state.form}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange} />
    );
  }
}
