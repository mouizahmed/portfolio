import React from 'react';

import { } from './components';
import NotFoundPage from './pages/404';
import Construction from './pages/Construction';

import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';



class App extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                    {<Redirect to="/comingsoon" />}
                    </Route>
                    
            
                    <Route exact path="/comingsoon"  render={props =>
                    <React.Fragment>
                        <Construction />
                    </React.Fragment>} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        );
    }
}

export default App;