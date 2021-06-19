//saga.js - to handle the effects caused by the actions
import axios from 'axios';
import {Alert} from 'react-native';
import {takeLatest, call, put, delay} from 'redux-saga/effects';
import {msToTime, getReleaseDate} from '../../utils';

import {
  FETCH_SONGS,
  FETCH_SONGS_SUCCEEDED,
  FETCH_SONGS_FAILED,
} from './actions';

//saga watcher function
function* fetchSongs(action) {
  try {
    //added delay of 2 seconds to show the loading screen for 2 seconds
    //as the API response is very quick and user not able to notice the loading screen after landing on home page
    yield delay(2000);

    //call api using saga effects
    let {data} = yield call(
      callAPI,
      'get',
      'https://itunes.apple.com/search?term=Michael+jackson',
    );
    let results = yield call(convertParameters, data.results);
    yield put({type: FETCH_SONGS_SUCCEEDED, payload: {data: results}});
  } catch (error) {
    Alert.alert(
      'Error',
      'Something went wrong, Please try again after some time',
      [
        {
          text: 'OK',
        },
      ],
      {
        cancelable: false,
      },
    );
    yield put({type: FETCH_SONGS_FAILED});
  }
}

/*
convert milli seconds to hour, minutes & seconds
&
convert releaseDate to the user redable format
(perform these calculations inside saga to reduce calculation load
at UI level inside the component)
*/
const convertParameters = array => {
  array.forEach(element => {
    element.playTime = msToTime(element.trackTimeMillis);
    element.convertedReleaseDate = getReleaseDate(element.releaseDate);
  });
  return array;
};

//axios generic request function for API call
const callAPI = (method, url) => {
  return axios.request({
    method: method,
    url: url,
    timeout: 5000,
  });
};

//saga watcher
export default function* homeSaga() {
  yield takeLatest(FETCH_SONGS, fetchSongs);
}
