import './sign-up.styles.scss';
import {Component} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            displayName:'',
            password:'',
            confirmPassword:'',
            email:''
        }
    }


   

    handleSubmit=(event)=>{
        event.preventDefault();
    }
    handleChange = (event)=>{
        event.preventDefault();
        const {name,value} = event.target;        
        this.setState({[name]: value});
    }

    render(){
        return (<div className='sign-up'>
        
            <h2>I do not have a account </h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput handleChange={this.handleChange} type='text' name='displayName' label='Display Name' value={this.state.displayName} />
                
                <FormInput type='email' name='email' label='Email' value={this.state.email} required handleChange={this.handleChange}/>              

                <FormInput type='password' name='password' label='Password' value={this.state.password} required 
                handleChange={this.handleChange}/>  
                
                
                <FormInput type='password' name='confirmPassword' label='Confirm Password' value={this.state.confirmPassword} required 
                handleChange={this.handleChange}/>  
                
                <CustomButton type="submit" >SIGN UP</CustomButton>

            </form>

        </div>)
    }
}

export default SignUp;