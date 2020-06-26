import React, { Component } from 'react';

import {
  Switch,
  Route
}                           from 'react-router-dom';

import { 
    Provider as ReduxProvider 
}                           from 'react-redux';

import { PersistGate }      from 'redux-persist/integration/react';

import { 
    IntouchProvider,
    IntouchRouter 
}                           from 'intouch-plugin-bridge';

import configureStore       from './redux/store';

import Demo                 from './modules/demo/Demo';
import Demo2                from './modules/demo/Demo2';

const { store, persistor } = configureStore();

class App extends Component {

    constructor(props) {
        super(props);

        this.config = {
            api: 'abc',
            origin: '*'
        }

    }

    onBeforeLift = async ({preferredLanguage}) => {
    }

    render() {
        return (
            <ReduxProvider store={store}>
                <PersistGate persistor={persistor}>
                    <IntouchProvider 
                        config={this.config}
                        onBeforeLift={this.onBeforeLift}
                    >
                        <IntouchRouter>

                            <Switch>
                                <Route path="/" exact component={Demo} />
                                <Route path="/demo2" exact component={Demo2} />
                                <Route path="*">
                                    <div>Not found!</div>
                                </Route>
                            </Switch> 
            
                        </IntouchRouter>
                    </IntouchProvider>
                </PersistGate>
            </ReduxProvider>
        );
    }

}

export default App;
