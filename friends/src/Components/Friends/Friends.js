import React from 'react';
import { connect } from 'react-redux';
import { fetch, deleter, add, update } from '../../store/actions';
import styled from 'styled-components';

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;

.friend {
background: #C6FFDD;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
border-radius: 50%;
width: 50%;
margin: 1rem;
}

`;

class Friends extends React.Component {
        constructor(props) {
                super(props);
                this.state = { 
                        name: '',
                        age: '',
                        email: ''
                 }
        }

        componentDidMount = () => {
                this.props.fetch();
        };

        handleChange = (e) => {
                this.setState({
                        [e.target.name]: e.target.value
                });
        };

//         updater = (e) => {
//                 // this.props.update(id, this.state.name, this.state.age, this.state.email);

// // console.log(e.target.id)
//         // this.setState({
//         //         name: '',
//         //         age: '',
//         //         email: ''
//         // });
//         };

adder = () => {
        this.props.add(this.state.name, this.state.age, this.state.email);
}

        render() {
                return (
                        <StyledDiv>
                                {this.props.friends.map(friend => {
                                        return <div
                                                className="friend"
                                                key={friend.id}>
                                                <h1>{friend.name}</h1>
                                                <p>{friend.age}</p>
                                                <p>{friend.email}</p>
                                                <button onClick={() => this.props.deleter(friend.id)}>Delete</button>
                                                {/* <button id={friend.id} onClick={this.props.update(friend.id, this.state.name, this.state.age, this.state.email)}>update</button> */}
                                        </div>
                                })}
                                <input
                                 onChange={this.handleChange} 
                                 name="name"
                                  type="text"
                                  value={this.state.name}/>
                                <input
                                 onChange={this.handleChange} 
                                 name="age"
                                  type="number"
                                  value={this.state.age}/>
                                <input
                                 onChange={this.handleChange}
                                  name="email"
                                   type="text"
                                   value={this.state.email}/>
                                   <button onClick={this.adder} >Add</button>
                        </StyledDiv>
                );
        }
}

const mapStateToProps = state => {
        return {
                friends: state.friends,
                loading: state.loading,
                error: state.error
        }
};

export default connect(mapStateToProps, { fetch, deleter, add, update })(Friends);
