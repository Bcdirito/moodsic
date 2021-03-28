import React from 'react';
import PlaylistStyle from './PlaylistStyle';
import playlistData from '../../db/playlistData.js';

const Playlist = ({ loggedIn }) => {
  const logIntoSpotify = () => {
    window.location.href = 'http://localhost:8000/login';
  };

  let renderPlaylist = (
    <div>
      <iframe
        src={`https://open.spotify.com/embed/playlist/5hVtJ1lCVihIB0444XsvF4`}
        width='500'
        height='600'
        frameBorder='0'
        allowtransparency='true'
        allow='encrypted-media'
        title='sadGirlHour'
      ></iframe>
    </div>
  );
  let renderLogin = (
    <button type='button' onClick={logIntoSpotify}>
      Login
    </button>
  );

  return (
    <PlaylistStyle>{loggedIn ? renderPlaylist : renderLogin}</PlaylistStyle>
  );
};

export default Playlist;
