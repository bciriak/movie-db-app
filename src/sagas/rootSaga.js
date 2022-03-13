import { all } from 'redux-saga/effects'
import moviesWatcher from './handlers/movieHandlers'

export default function* rootSaga() {
  yield all([moviesWatcher()])
}
