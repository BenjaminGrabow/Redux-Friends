import React from 'react';
import { connect } from 'react-redux';
import { fetch } from '../../store/actions';
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

        componentDidMount = () => {
                this.props.fetch();
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
                                                <button onClick={() => this.props.delete(friend.id)}>Delete</button>
                                                <button onClick={() => this.props.delete(friend.id)}>Delete</button>
                                        </div>
                                })}
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

export default connect(mapStateToProps, { fetch })(Friends);
