import React, { useState, useEffect } from 'react';
import { PlaylistStyle } from './PlaylistStyle.js';
import playlistData from '../../db/playlistData.js';

const Playlist = ({ loggedIn, choices }) => {
  const [playlistID, setPlaylistID] = useState(null);
  const [playlistKey, setPlaylistKey] = useState(null);

  useEffect(() => {
    suggestSpotifyPlaylist();
  });

  const logIntoSpotify = () => {
    window.location.href = 'http://localhost:8000/login';
  };

  const getRandomInt = () => {
    let min = Math.ceil(1);
    let max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const suggestSpotifyPlaylist = () => {
    const allChoices = Object.keys(choices);
    let maxKey;
    let max = 0;
    let choice;

    for (const key in choices) {
      if (choices[key] > max) {
        maxKey = key;
        max = choices[key];
      }
    }

    // If there is a tie, return random playlist
    // Otherwise, return suggested playlist
    if (max === 1) {
      choice = allChoices[getRandomInt()];

      if (playlistData[choice]) {
        setPlaylistID(playlistData[choice]['id']);
      }
    } else {
      if (sessionStorage.getItem('maxKey')) {
        setPlaylistID(playlistData[sessionStorage.getItem('maxKey')]['id']);
      }
    }

    if (maxKey) {
      sessionStorage.setItem('maxKey', maxKey);
      setPlaylistKey(maxKey || sessionStorage.getItem('maxKey'));
    }
  };

  let renderPlaylist = (
    <iframe
      src={`https://open.spotify.com/embed/playlist/${playlistID}`}
      width='100%'
      height='600'
      frameBorder='0'
      allowtransparency='true'
      allow='encrypted-media'
      title={playlistKey}
    ></iframe>
  );
  let renderLogin = (
    <button type='button' onClick={logIntoSpotify}>
      Login
    </button>
  );

  return (
    <section>
      <PlaylistStyle>{loggedIn ? renderPlaylist : renderLogin}</PlaylistStyle>
    </section>
  );
};

export default Playlist;
