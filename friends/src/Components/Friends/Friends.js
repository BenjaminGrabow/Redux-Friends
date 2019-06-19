import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Friends extends React.Component {
        constructor(props) {
                super(props);
                this.state = {  }
        }

        componentDidMount = () => {
axios.get('http://localhost:5000/api/friends')
.then(res => {
console.log(res.data)
})
.catch(err => {

})
        }

        render() { 
                return ( 
<h1>Hello</h1>
                 );
        }
}
 
// export default connect(mapStateToProps,)(Friends);
export default Friends;