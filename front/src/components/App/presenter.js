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

const App = props => [
    props.isLoggedIn ? <Navigation key={1} /> : null,
    props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublickRoutes key={2} />,
    props.show_menu ? <Menu key={3} /> : null ,
    <Footer key={4} />
]

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

const PrivateRoutes = props => (
    <Switch>
        <Route exact path='/' component={Feed} />
        <Route exact path='/explore' component={Explore} />
        <Route exact path='/search/:searchTerm' component={Search} />
        <Route exact path='/category/list/' component={CategoryList} />
        <Route exact path='/category/:categoryName/' component={Category} />
    </Switch>
)

const PublickRoutes = props => (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route esact path='/forgot' render={() => 'password'} />
    </Switch>
)

export default App;