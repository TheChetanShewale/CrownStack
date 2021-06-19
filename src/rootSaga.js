//rootSaga.js - for centralized saga management in case of multiple sagas to be handled.
import {fork} from 'redux-saga/effects';

import homeSaga from './containers/home/saga';

export default function* rootSaga() {
  yield fork(homeSaga);
}
