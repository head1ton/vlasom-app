import { connect } from 'react-redux';
import Container from './container';

const mapStateToProps = (state, ownProps) => {
    const { user: { userList } } = state;
    const { routing : { location } } = state;
    return {
        userList,
        pathname: location.pathname
    }
}

export default connect(mapStateToProps)(Container);