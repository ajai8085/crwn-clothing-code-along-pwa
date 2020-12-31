import './sign-in.styles.scss';
import { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  hanldleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-in-form">
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            required
            handleChange={this.hanldleChange}
          />

          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            required
            handleChange={this.hanldleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton
              type="button"
              isGoogleSignin
              onClick={signInWithGoogle}
            >
              {' '}
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
