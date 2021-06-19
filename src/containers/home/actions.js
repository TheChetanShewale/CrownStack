//actions.js - to intercept the actions triggered at UI level
export const FETCH_SONGS = 'fetch_songs';
export const FETCH_SONGS_SUCCEEDED = 'fetch_songs_succeeded';
export const FETCH_SONGS_FAILED = 'fetch_songs_failed';
export const RESET = 'reset_home';

export function fetchSongs() {
  return {type: FETCH_SONGS};
}

export function reset() {
  return {type: RESET};
}
