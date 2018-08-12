import React from 'react';
import { Link } from 'react-router-dom';
// import VisiblePlaylists from "../containers/VisiblePlaylists";
import Playlists from "../components/Playlists";

function Sidebar(props) {
  return (
    <aside className="site-sidebar">
      <nav className="side-nav">
        <ul>
          <li><Link to="/create-playlist">Create Playlist</Link></li>
          <li><Link to="/top-songs">Top Songs</Link></li>
          <li><Link to="/my-playlists">My Playlists</Link></li>
        </ul>
      </nav>

      <hr />

      <h4>Your Playlists:</h4>
      <Playlists hideTitle={true} olCssClass="playlist_sidebar" />
    </aside>
  );
}

export default Sidebar;
