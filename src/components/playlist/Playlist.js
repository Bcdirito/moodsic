import React, { useState, useEffect } from 'react';
import { PlaylistStyle } from './PlaylistStyle.js';
import playlistData from '../../db/playlistData.js';

const Playlist = ({ loggedIn, choices, retakeQuiz }) => {
  const [playlistID, setPlaylistID] = useState(null);
  const [playlistKey, setPlaylistKey] = useState(null);
  let maxKey;
  let otherMaxKey;
  let max = 0;

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

  const isTied = () => {
    let isTied = false;

    if (maxKey && max > 1) {
      // Check for possible tie in `choices`
      if (choices[maxKey] !== undefined) {
        for (const key in choices) {
          if (key !== maxKey && choices[maxKey] === choices[key]) {
            otherMaxKey = key;
            isTied = true;
            break;
          }
        }
      }
    }

    return isTied;
  };

  // Return one of two tied playlists
  const getRandomKey = () => {
    return Math.random() < 0.5 ? maxKey : otherMaxKey;
  };

  const suggestSpotifyPlaylist = () => {
    const allChoices = Object.keys(choices);
    let choice;

    for (const key in choices) {
      if (choices[key] > max) {
        maxKey = key;
        max = choices[key];
      }
    }

    // If there is a tie between 2 playlists, return 1 of 2 random playlists
    // If all gets a single vote, return random playlist
    // Otherwise, return suggested playlist
    if (isTied()) {
      console.log('Tie', maxKey, otherMaxKey);
      const randomKey = getRandomKey();

      if (randomKey) {
        setPlaylistID(playlistData[randomKey]['id']);
      }
    } else if (max === 1) {
      console.log('Max is 1');
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
    <React.Fragment>
      <iframe
        src={`https://open.spotify.com/embed/playlist/${playlistID}`}
        width='100%'
        height='600'
        frameBorder='0'
        allowtransparency='true'
        allow='encrypted-media'
        title={playlistKey}
      ></iframe>

      <button type='button' onClick={retakeQuiz}>
        Retake Quiz
      </button>
    </React.Fragment>
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
