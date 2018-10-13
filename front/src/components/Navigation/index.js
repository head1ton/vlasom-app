import { connect } from 'react-redux';
import Container from './container';
import { push } from 'react-router-redux';
import { actionCreators as globalActions } from 'redux/modules/global';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        goToSearch: (searchTerm) => {
            dispatch(push(`/search/${searchTerm}`));
        },
        openMenu: () => {
            dispatch(globalActions.openMenu())
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);