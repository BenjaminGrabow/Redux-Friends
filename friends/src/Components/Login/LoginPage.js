import React from 'react';
import { connect } from 'react-redux'
import { login } from '../../store/actions';

class LoginPage extends React.Component {
        constructor(props) {
                super(props);
                this.state = { 
                        credentials: {
                                username: '',
                                password: ''
                        }
                }
        }

        handleChange = e => {
                this.setState({
                        credentials: {
                                ...this.state.credentials,
                        [e.target.name]: e.target.value
                        }
                })
        };

        login = e => {
                e.preventDefault();
                this.props.login(this.state.credentials);
        }


        render() { 
                return ( 
                        <div>
                                <form 
                                onSubmit={this.login}>
                                        <input
                                        name="username"
                                        onChange={this.handleChange}
                                        value={this.state.username}
                                        />
                                        <input
                                        name="password"
                                        onChange={this.handleChange}
                                        value={this.state.password}
                                        />
                                        <button type="submit">Login</button>
                                </form>
                        </div>
                 );
        }
}
 
export default connect(null, login)(LoginPage);