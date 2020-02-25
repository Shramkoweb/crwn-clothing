import React from 'react';

import FormInput from '../form-input/form-input.component';

import './sing-in.styles.scss';

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have account</h2>
        <p>Sign in with your email and password</p>

        <form onSubmit={this._handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="email"
            id='email'
            name='email'
            label='email'
            value={this.state.email}
            required
          />

          <FormInput
            handleChange={this.handleChange}
            type="password"
            id='password'
            name='password'
            label='password'
            value={this.state.password}
            required
          />

          <input type="submit" value='Submit Form'/>
        </form>
      </div>
    );
  }
}

export default SignIn;
