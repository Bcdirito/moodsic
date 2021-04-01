import { useState, useEffect } from 'react';
import Quiz from './components/quiz/Quiz.js';
import './App.scss';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // return function disconnectPlayer() {
    //   console.log('Disconnecting player...');
    //   player.disconnect();
    // };
    if (window.location.pathname.includes('access_token')) {
      let token;
      let path = window.location.pathname.split('/');
      path = path[1].split('&');

      // Get access token value from path name
      for (const key of path) {
        if (key.includes('access_token')) {
          token = key.split('=')[1];
        }
      }

      setAccessToken(token);
    }
  }, []);

  useEffect(() => {
    if (window.Spotify) {
      setLoggedIn(true);
    } else {
      window.onSpotifyWebPlaybackSDKReady = () => {
        if (accessToken) {
          console.log('Spotify initialized');

          // Initialize Spotify player
          const player = new window.Spotify.Player({
            name: "Brian's Player :)",
            getOAuthToken: callback => {
              // Run code to get a fresh access token

              callback(accessToken);
            },
            volume: 0.5
          });

          player.connect().then(success => {
            if (success) {
              console.log(
                'The Web Playback SDK successfully connected to Spotify!'
              );
              setLoggedIn(true);
            }
          });
        }
      };
    }
  }, [accessToken]);

  useEffect(() => {
    if (loggedIn) {
      if (window.location.pathname.includes('access_token')) {
        let token;
        let path = window.location.pathname.split('/');
        path = path[1].split('&');

        // Get access token value from path name
        for (const key of path) {
          if (key.includes('access_token')) {
            token = key.split('=')[1];
          }
        }

        setAccessToken(token);
      }
    }
  }, [loggedIn]);

  return (
    <div className='App'>
      <Quiz loggedIn={loggedIn} />
    </div>
  );
}

export default App;
