import './sign-up.styles.scss';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
  const [signUpDetails, setSignUpDetails] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = signUpDetails;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password mismatch');
      return;
    }

    signUpStart({ email, password, displayName });
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setSignUpDetails({ ...signUpDetails, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account </h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          handleChange={handleChange}
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
          handleChange={handleChange}
        />

        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          required
          handleChange={handleChange}
        />

        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={confirmPassword}
          required
          handleChange={handleChange}
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};
const disptchPropsToMethods = (dispatch) => ({
  signUpStart: ({ email, password, displayName }) =>
    dispatch(signUpStart({ email, password, displayName })),
});

export default connect(null, disptchPropsToMethods)(SignUp);
