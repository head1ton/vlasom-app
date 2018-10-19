import { connect } from 'react-redux';
import Container from './container';

const mapStateToProps = (state, ownProps) => {
    const { global : { loginUser } } = state;
    const { routing : { location } } = state;
    return {
        loginUser,
        pathname: location.pathname
    }
}

export default connect(mapStateToProps)(Container);