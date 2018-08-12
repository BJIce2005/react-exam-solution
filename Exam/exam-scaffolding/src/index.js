import './main.scss';
import "babel-polyfill";
import "whatwg-fetch";
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './js/common/Header';
import Sidebar from './js/common/Sidebar';
import CreatePlaylist from './js/common/CreatePlaylist';
import TopSongs from './js/common/TopSongs';
import Home from './js/common/Home'
import Playlists from "./js/components/Playlists";

import rootReducer from "./js/reducers";
import SongsList from "./js/common/SongsList";
import {addPlaylist} from "./js/actions";

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(rootReducer, applyMiddleware(middleware));


debugger; // поверка за локалсторадже
//store.dispatch(addPlaylist({name: data.get('playlist.name')}))
    // store.subscribe(() => console.log('Look ma, Redux!!'))

window.store = store;

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Header />
            <div className="row no-gutters main-content-wrapper">
              <div className="col-3">
                <Sidebar />
              </div>
              <div className="col-9">
                <Route exact path="/" component={Home} />
                <Route exact path="/create-playlist" component={CreatePlaylist} />
                <Route exact path="/create-playlist/:id" component={CreatePlaylist} />
                <Route exact path="/my-playlists" component={Playlists} />
                <Route exact path="/top-songs" component={TopSongs} />
                <Route exact path="/playlist/:id" component={Playlists} />
              </div>
            </div>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
