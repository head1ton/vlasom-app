import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as globalActions } from 'redux/modules/global';

const mapStateToProps = (state, ownProps) => {
    const { global : { loginUser } } = state;
    const { routing : { location } } = state;
    return {
        loginUser,
        pathname: location.pathname,
    }
}

export default connect(mapStateToProps)(Container);