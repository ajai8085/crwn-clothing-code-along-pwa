import './sign-up.styles.scss';
import { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('Password mismatch');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account </h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            handleChange={this.handleChange}
            type="text"
            name="displayName"
            label="Display Name"
            value={displayName}
            required
          />

          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            required
            handleChange={this.handleChange}
          />

          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            required
            handleChange={this.handleChange}
          />

          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            required
            handleChange={this.handleChange}
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
