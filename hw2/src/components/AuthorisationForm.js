import React, { Component } from "react";

class AuthorisationForm extends Component {
    state = {
        username: '',
        password: '',
        message: ''
    }

    changeHandler = (e, field) => {
        this.setState({ [field]: e.target.value })
    }

    validation = (e, field) => {
        if (this.state[field].length < 2) {
            this.setState({ message: `${field} is too short` })
        } else {
            this.setState({ message: '' })
        }
        console.log((this.state[field]))
    }

    submitHandler = (e) => {
        e.preventDefault()
        if (!this.state.message) {
            console.log('Username: ' + this.state.username + '`\n`, password: ' + this.state.password)
        }
    }

    render() {
        return (
            <div className='task second'>
                <form>
                    <h2>LogIn</h2>
                    <input type="text"
                        value={this.state.username}
                        onChange={(e) => this.changeHandler(e, 'username')}
                        onInput={(e) => this.validation(e, 'username')}
                        placeholder='username'
                    />
                    <input type="password"
                        value={this.state.password}
                        onChange={(e) => this.changeHandler(e, 'password')}
                        onInput={(e) => this.validation(e, 'password')}
                        placeholder='password'
                    />
                    <p>{this.state.message}</p>
                    <button type='submit' onClick={this.submitHandler}>Submit</button>
                </form>
            </div>
        )
    }
}

export default AuthorisationForm