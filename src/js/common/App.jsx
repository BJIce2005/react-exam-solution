import React from "react";
import {Provider} from "react-redux";
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import Header from "./Header";
import Sidebar from "./Sidebar"


class App extends React.Component {



    render() {
        return (
            <Provider store={this.props.store}>
                <ConnectedRouter history={history}>
                    <div>
                        <Header />
                        <div className="row no-gutters main-content-wrapper">
                            <div className="col-3">
                                <Sidebar />
                            </div>
                            <div className="col-9">
                                {/* Routes go here */}
                            </div>
                        </div>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;