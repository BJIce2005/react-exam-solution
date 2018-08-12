import React from 'react';
import { Link } from 'react-router-dom';
import { Control } from 'react-redux-form';
import SongsList from './SongsList';
import songs from '../data/songs';

function TopSongs(props) {
  return (
    <div className="container header-container">
        <div className="row">
            <div className="col-12">
              <h1>Top 3 Songs</h1>
              <SongsList songs={SongsList} listType="top5" />
            </div>
        </div>
    </div>
  );
}

export default TopSongs;
