import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import 'components/App/styles.scss';
import Footer from 'components/Footer';
import Auth from 'components/Auth';

const App = props => [
    props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublickRoutes key={2} />,
    <Footer key={3} />
]

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

const PrivateRoutes = props => (
    <Switch>
        <Route exact path='/' render={() => 'feed'} />
        <Route esact path='/explore' render={() => 'explore'} />
    </Switch>
)

const PublickRoutes = props => (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route esact path='/forgot' render={() => 'password'} />
    </Switch>
)

export default App;