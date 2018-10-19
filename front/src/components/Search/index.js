import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userAactions } from 'redux/modules/user';

const mapStateToProps = (state, ownProps) => {
    const { user: { userList, imageList } } = state;
    const { routing : { location } } = state;
    return {
        imageList,
        userList,
        pathname: location.pathname
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { match: { params: { searchTerm } } } = ownProps;
    return{
        searchByTerm: () => {
            dispatch(userAactions.searchByTerm(searchTerm))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);