import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.util';

import './sign-in.styles.scss';

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    };
  }

  _handleSubmit = async (evt) => {
    evt.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '', errorMessage: '' });
    } catch (error) {
      this.setState({ errorMessage: error.message });
      console.error(error);
    }
  };

  handleChange = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have account</h2>
        <p>Sign in with your email and password</p>

        <form onSubmit={this._handleSubmit}>
          <FormInput
            autoComplete='email'
            handleChange={this.handleChange}
            type='email'
            id='email'
            name='email'
            label='email'
            value={this.state.email}
            required
          />

          <FormInput
            autoComplete='current-password'
            handleChange={this.handleChange}
            type="password"
            id='password'
            name='password'
            label='password'
            value={this.state.password}
            required
          />

          <p>{this.state.errorMessage}</p>

          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton isGoogleSignIn type='button' onClick={signInWithGoogle}>Sign in google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
