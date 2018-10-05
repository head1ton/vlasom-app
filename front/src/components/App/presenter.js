import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from 'components/App/styles.scss';
import Footer from 'components/Footer';

const App = props => [
    props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublickRoutes key={2} />,
    <Footer key={3} />
]

const PrivateRoutes = props => (
    <Switch>
        <Route exact path='/' render={() => 'feed'} />
        <Route esact path='/explore' render={() => 'explore'} />
    </Switch>
)

const PublickRoutes = props => (
    <Switch>
        <Route exact path='/' render={() => 'login'} />
        <Route esact path='/forgot' render={() => 'password'} />
    </Switch>
)

export default App;