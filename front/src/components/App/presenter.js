import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import 'components/App/styles.scss';
import Footer from 'components/Footer';
import Auth from 'components/Auth';
import Navigation from 'components/Navigation';
import Feed from 'components/Feed';
import Explore from 'components/Explore';
import Search from 'components/Search';
import Menu from 'components/Menu';
import CategoryList from 'components/CategoryList';
import Category from 'components/Category';
import Loading from 'components/Loading';
import InterestList from 'components/InterestList';
import Profile from 'components/Profile';
import UserUploaded from 'components/UserUploaded';
import OtherProfile from 'components/OtherProfile';
import Notifications from 'components/Notifications';
import styles from 'components/Feed/styles.scss';

const App = props => [
    props.isLoggedIn ? (props.loginUser ? [<Navigation key={1} />,<PrivateRoutes key={2} />]: <AppLoading />) : <PublickRoutes key={2} />,
    props.show_menu ? <Menu key={3} /> : null ,
    <Footer key={4} />
]

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

const AppLoading = props => (
    <div className={`${styles.row} ${styles.alignItemsCenter}`}>
        <div className={`${styles.col12} ${styles.row} ${styles.feed} ${styles.alignItemsCenter}`}>
            <Loading />
        </div>
    </div>
)

const PrivateRoutes = props => (
    <Switch>
        <Route exact path='/' component={Feed} />
        <Route exact path='/explore' component={Explore} />
        <Route exact path='/search/:searchTerm' component={Search} />
        <Route exact path='/category/list/' component={CategoryList} />
        <Route exact path='/category/:categoryName/' component={Category} />
        <Route exact path='/interest/list/' component={InterestList} />
        <Route exact path='/my/profile/' component={Profile} />
        <Route exact path='/my/upload/' component={UserUploaded} />
        <Route exact path='/profile/:username/' component={OtherProfile} />
        <Route exact path='/notifications/' component={Notifications} />
        <Route exact path='/image/:photoId/' render={() => 'image detail'} />
    </Switch>
)

const PublickRoutes = props => (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route esact path='/forgot' render={() => 'password'} />
    </Switch>
)

export default App;