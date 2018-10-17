import { connect } from 'react-redux';
import Container from './container';

const mapStateToProps = (state, ownProps) => {
    const { global : { loginUser } } = state;
    return {
        loginUser
    }
}

export default connect(mapStateToProps)(Container);