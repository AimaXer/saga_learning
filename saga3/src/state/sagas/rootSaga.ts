import { all, AllEffect, fork, ForkEffect } from 'redux-saga/effects';
import counterSagas from './saga';

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(counterSagas)]);
}
