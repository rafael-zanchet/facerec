import React from 'react'

class Register extends React.Component  {

    constructor(props){
        super();
        this.state = {
            regEmail: '',
            regPassword: '',
            regName: ''
        }
    }

    onNameChange = (event) => {
        this.setState({regName: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({regEmail: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({regPassword: event.target.value});
    }

    onSubmitRegister = () => {
        //console.log(this.state.signInEmail, this.state.signInPassword);
        fetch('https://damp-earth-57539.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.regEmail,
                password: this.state.regPassword,
                name: this.state.regName
            })
        })
        .then(response => response.json())        
        .then(user => {
            if (user.id){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
    }


    render (){
        return (
            <article className="br4 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
                    <legend className="f1 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input
                            onChange={this.onNameChange} 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" name="name"  id="name" />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input
                            onChange={this.onEmailChange} 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input
                            onChange={this.onPasswordChange} 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" name="password"  id="password" />
                    </div>
                    </fieldset>
                    <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Register" 
                        onClick={this.onSubmitRegister}
                    />
                    </div>
                </div>
            </main>
            </article>
        ); 
    }      
}

export default Register;